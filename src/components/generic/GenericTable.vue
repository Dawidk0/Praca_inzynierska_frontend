<template>
  <v-container  grid-list-md text-xs-center>
    <v-flex>
    <v-card>
      <v-card-title  >
       <h2>{{tableName}}</h2>
        <v-spacer></v-spacer>
        <v-text-field
        v-model="search"
        append-icon="search"
        label="Wyszukaj"
        single-line
        hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">

        <v-btn
          class="green darken-2"
          dark
          round
          slot="activator"
        >Dodaj</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-form
                v-model="valid">
              <v-layout wrap>
                <v-flex  v-for="(value,key,index) in defaultItem" v-if="tableModel.parentId !== key" :key="key" >
                  <v-menu
                    v-if="tableHeaders[index].dateField"
                    :close-on-content-click="false"
                    v-model="tableHeaders[index].input"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                    >
                    <v-text-field
                      :hint="tableHeaders[index].required ? 'Obowiązkowe' : ''"
                      persistent-hint
                      :rules="tableHeaders[index].required ? requireRules : []"
                      slot="activator"
                      v-model="editedItem[key]"
                      :label="polishLabels[index]"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-date-picker v-model="editedItem[key]" @input="tableHeaders[index].input = false"></v-date-picker>
                  </v-menu>
                  <v-select
                    :hint="tableHeaders[index].required ? 'Obowiązkowe' : ''"
                    persistent-hint
                    :rules="tableHeaders[index].required ? requireRules : []"
                    v-if="tableHeaders[index].selectField"
                    :items="getTableItems({
                      tableName: tableHeaders[index].fromTable
                      })"
                    :item-text=tableHeaders[index].toShow
                    :item-value="key"
                    :label="polishLabels[index]"
                    v-model="editedItem[key]"
                  ></v-select>
                  <v-text-field
                    :hint="tableHeaders[index].required ? 'Obowiązkowe' : ''"
                    persistent-hint
                    :rules="tableHeaders[index].required ? requireRules : []"
                    v-if="!tableHeaders[index].selectField && !tableHeaders[index].dateField && key != tableModel.parentIdField"
                    v-model="editedItem[key]"
                    :label="polishLabels[index]"
                  ></v-text-field>
                </v-flex>

              </v-layout>
              </v-form>

            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Anuluj</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Zapisz</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-card-title>
    </v-card>
    <v-data-table
      :headers="tableHeaders"
      :items="getTableItems({
      tableName: this.path,
      parentId: tableModel.parentIdValue,
      parentIdField: tableModel.parentIdField
      })"
      :search="search"
      class="elevation-1"
      rows-per-page-text="Liczba wierszy"
      :rows-per-page-items="pages"
    >
      <template slot="items" slot-scope="props" >
        <td
          class="text-xs-right"
          v-for="(value,key,index) in defaultItem" v-if="tableModel.parentIdField != key">
          {{
            tableHeaders[index].relation ?
            getRelationName(
              {tableName: tableHeaders[index].fromTable,
              propsToCompare: key,
              props: Number(props.item[key]),
              propsToShow: tableHeaders[index].toShow
              })
            :props.item[key]
          }}
        </td>
        <td class="text-md-center">
          <div>
          <v-btn
            style="width:30px;height:30px;"
            class="indigo lighten-1"
            fab
            dark
            small
            @click="editItem(props.item)"
          ><v-icon>edit</v-icon>
          </v-btn>
            <v-btn
              class="red darken-1"
              fab
              dark
              small
              style="width:30px;height:30px;"
              @click="deleteItem(props.item)"
            >
          <v-icon
            fab
          >
            delete
          </v-icon>
          </v-btn>
          <v-btn
            class="deep-orange darken-1"
            small
            round
            dark
            @click="goToDetails(props.item)"
            style="height:30px;"
            v-if="tableModel.detailsButton"
          >
            {{tableModel.buttonName ? tableModel.buttonName : 'Szczegóły'}}
          </v-btn>
          </div>
        </td>
      </template>
      <template slot="no-data">
        <p class="justify-center layout px-0">Brak danych</p>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Brak wyników dla: "{{ search }}"
      </v-alert>
    </v-data-table>
    </v-flex>
  </v-container>
</template>

<script>
  import swal from 'sweetalert2'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    props: ['tableModel'],

    data: () => ({
      pages: [5, 10, 15, 20],
      dateField: '',
      path: '',
      tableName: '',
      newItemTitle: '',
      editItemTitle: '',
      tableHeaders: [],
      polishLabels: [],
      defaultItem: {},
      editedIndex: -1,
      editedItem: {},
      search: '',
      dialog: false,
      valid: false,
      requireRules: [
        v => !!v || 'Obowiązkowe'
      ]
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? this.newItemTitle : this.editItemTitle
      },
      ...mapGetters([
        'getTableItems',
        'getRelationName',
        'getMaxValue',
        'getAccountDetail',
        'getMaxId'
      ])
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.newItemTitle = this.tableModel.newItemTitle
      this.editItemTitle = this.tableModel.editItemTitle
      this.path = this.tableModel.path
      this.editedItem = Object.assign({}, this.tableModel.model)
      this.defaultItem = Object.assign({}, this.tableModel.model)
      this.tableName = this.tableModel.tableName ? this.tableModel.tableName : this.getAccountDetail(
        {tableName: this.tableModel.parentTable, field: this.tableModel.parentIdField, value: this.$route.params.id})[this.tableModel.fieldToShow]
      for (let index in this.tableModel.headers) {
        this.tableHeaders.push(
            this.tableModel.headers[index]
          )
      }
      for (let index in this.tableModel.polishLabels) {
        this.polishLabels.push(
          this.tableModel.polishLabels[index]
        )
      }
    },

    methods: {
      ...mapMutations([
        'setDetailsItem',
        'addItem',
        'addAccount'
      ]),

      editItem (item) {
        this.editedIndex = this.getTableItems({
          tableName: this.path}).indexOf(item)
        this.editedItem = Object.assign({}, item)
        if (this.tableModel.parentIdField) { this.editedItem[this.tableModel.parentIdField] = this.tableModel.parentIdValue }
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.getTableItems({
          tableName: this.path}).indexOf(item)
        confirm('Na pewno chcesz usunąć tę pozycje?') && this.getTableItems({
          tableName: this.path}).splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.tableModel.model)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.valid) {
          if (this.tableModel.uniqueField &&
            this.getTableItems(
          {tableName: this.tableModel.path, parentId: this.editedItem[this.tableModel.uniqueField], parentIdField: this.tableModel.uniqueField}
        ).length > 0) {
            console.log(this.getTableItems({tableName: this.tableModel.path, parentId: this.editedItem[this.tableModel.uniqueField], parentIdField: this.tableModel.uniqueField})[0][this.tableModel.idField]
              // eslint-disable-next-line
            )
            if (this.editedIndex > -1 &&
              this.getTableItems(
                {tableName: this.tableModel.path, parentId: this.editedItem[this.tableModel.uniqueField], parentIdField: this.tableModel.uniqueField}
                // eslint-disable-next-line
              ).length == 1 &&
              this.getTableItems(
                {tableName: this.tableModel.path, parentId: this.editedItem[this.tableModel.uniqueField], parentIdField: this.tableModel.uniqueField}
                // eslint-disable-next-line
                )[0][this.tableModel.idField] == this.editedItem[this.tableModel.idField]) {
              Object.assign(this.getTableItems({
                tableName: this.path})[this.editedIndex], this.editedItem)
              this.close()
            } else {
              swal({
                title: 'Błąd!',
                text: 'Nowa pozycja nie jest unikalna',
                type: 'error'
              })
            }
          } else {
            if (this.tableModel.parentIdField) { this.editedItem[this.tableModel.parentIdField] = this.tableModel.parentIdValue }
            if (this.editedIndex > -1) {
              Object.assign(this.getTableItems({
                tableName: this.path})[this.editedIndex], this.editedItem)
            } else {
              let newId = this.getMaxId({tableName: this.tableModel.path, idField: this.tableModel.idField}) + 1
              this.editedItem[this.tableModel.idField] = newId
          // eslint-disable-next-line
          if(this.path == 'clients'){
            this.editedItem.name = this.editedItem.brideFirstName + ' i ' + this.editedItem.groomFirstName
          }
              this.getTableItems({
                tableName: this.path}).push(this.editedItem)
          // eslint-disable-next-line
          if(this.path == 'clients'){
            this.addAccount(newId)
          }
            }
            this.close()
          }
        } else {
          swal({
            title: 'Błąd!',
            text: 'Podaj wymagane pola',
            type: 'error'
          })
        }
      },

      goToDetails (item) {
        let tempId = item[this.tableModel.idField]
        this.$store.commit('setDetailsItem', { id: tempId, path: this.path, item: item })
        this.$router.push(this.path + '/' + tempId + '/details')
      }
    }
  }
</script>

<style scoped>

</style>
