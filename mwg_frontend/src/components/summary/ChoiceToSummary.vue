<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{tableName}}
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Wyszukaj"
          single-line
          hide-details
        ></v-text-field>

        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
      </v-card-title>
      <v-spacer></v-spacer>
    </v-card>
    <v-data-table
      :headers="tableHeaders"
      :items="getTableItems({
      tableName: this.path,
      parentId: tableModel.parentIdValue,
      parentIdField: tableModel.parentIdField
      })"
      :search="search"
      hide-actions
      class="elevation-1"
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
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
          <v-btn
            flat
            small
            @click="goToDetails(props.item)"
            v-if="tableModel.detailsButton"
          >
            Podsumowanie
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <p class="justify-center layout px-0">Brak danych</p>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Brak wyników dla: "{{ search }}"
      </v-alert>
    </v-data-table>
  </v-container>
</template>

<script>
  import tableModel from '../../models/weddingReceptionsTableModel'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'ChoiceToSummary',

    data: () => ({
      tableModel,
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
      dialog: false
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? this.newItemTitle : this.editItemTitle
      },
      ...mapGetters([
        'getTableItems',
        'getRelationName',
        'getMaxValue'
      ])
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.tableName = this.tableModel.tableName
      this.newItemTitle = this.tableModel.newItemTitle
      this.editItemTitle = this.tableModel.editItemTitle
      this.path = this.tableModel.path
      this.editedItem = Object.assign({}, this.tableModel.model)
      this.defaultItem = Object.assign({}, this.tableModel.model)
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
        'addItem'
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
        console.log(index)
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
        if (this.tableModel.parentIdField) { this.editedItem[this.tableModel.parentIdField] = this.tableModel.parentIdValue }
        if (this.editedIndex > -1) {
          Object.assign(this.getTableItems({
            tableName: this.path})[this.editedIndex], this.editedItem)
        } else {
          this.getTableItems({
            tableName: this.path}).push(this.editedItem)
        }
        this.close()
      },

      goToDetails (item) {
        let tempId = Object.values(item)[0]
        this.$store.commit('setDetailsItem', { id: tempId, path: this.path, item: item })
        this.$router.push('summary/' + tempId)
      }
    }
  }
</script>

<style scoped>
