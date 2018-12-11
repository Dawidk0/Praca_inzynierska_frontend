<template>
    <v-container>
      <v-form v-model="valid">

      <v-card>
        <v-card-title >
          <span class="headline" > {{this.getAccountDetail(
        {tableName: 'clients', field: 'clientId', value: this.$route.params.id})['name']}}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6
                      v-for="textField in detailsModel.fields.textFields"
                      :key="textField.value">
                <v-text-field
                  hint="Obowiązkowe"
                  persistent-hint
                  :rules="requireRules"
                  :label="textField.text"
                  v-model="editedItem[textField.value]"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6
                      v-for="passwordField in detailsModel.fields.password"
                      :key="passwordField.value">
                <v-text-field
                  :label="passwordField.text"
                  v-model="editedItem[passwordField.value]"
                  required
                  :type="show ? 'text' : 'password'"
                  :append-icon="show ? 'visibility_off' : 'visibility'"
                  @click:append="show = !show"
                ></v-text-field>
              </v-flex>
              <v-flex v-for="dateField in detailsModel.fields.dateFields" :key="dateField.text">
                <v-menu
                  :close-on-content-click="false"
                  v-model="input[dateField.value]"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="editedItem[dateField.value]"
                    :label="dateField.text"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="editedItem[dateField.value]" @input="input[dateField.value]= false"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12 sm6
                      v-for="selectField in detailsModel.fields.selectFields"
                      :key="selectField.label"
              >
                <v-select
                  :items="selectField.items"
                  :label="selectField.label"
                  v-model="editedItem[selectField.value]"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="setEditedItem">Restart</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Zapisz</v-btn>
        </v-card-actions>

      </v-card>
      </v-form>
    </v-container>
</template>

<script>
  import swal from 'sweetalert2'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    props: ['detailsModel', 'id'],
    name: 'GenericDetails',

    data () {
      return {
        show: false,
        accountId: -1,
        editedItem: {},
        input: {creationDate: '', expireDate: ''},
        valid: false,
        requireRules: [
          v => !!v || 'Obowiązkowe'
        ]
      }
    },

    computed: {
      ...mapGetters([
        'getDetailItem',
        'getAccountDetail',
        'getTableItems'
      ])
    },

    methods: {
      ...mapMutations([
        'setDetailsItem',
        'saveItem',
        'setDetailsComponentFlag',
        'disableDetailsComponentFlag'
      ]),
      setEditedItem () {
        this.editedItem = Object.assign({}, this.getAccountDetail({
          tableName: 'accounts',
          field: 'accountId',
          value: this.accountId
        }))
      },
      save () {
        if (this.valid) {
          if (this.detailsModel.uniqueField && this.getTableItems(
            {
              tableName: 'accounts',
              parentId: this.editedItem[this.detailsModel.uniqueField],
              parentIdField: this.detailsModel.uniqueField
            }
          ).length > 0) {
            swal({
              title: 'Błąd!',
              text: 'Login nie jest unikalny',
              type: 'error'
            })
          } else {
            Object.assign(this.getTableItems({
              tableName: 'accounts'
            })[this.editedItem.accountId], this.editedItem)
            this.$router.push('/clients')
          }
        }
      }
    },

    created () {
      this.accountId = this.getAccountDetail({tableName: 'accounts', field: 'clientId', value: this.id}).accountId
      this.setDetailsComponentFlag()
      this.setEditedItem()
    },

    beforeRouteLeave () {
      this.disableDetailsComponentFlag()
    }

  }
</script>

<style scoped>

</style>
