<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span class="headline" > Przyjęcie weselne nr {{id}}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          {{clientDetails}}
        <!--  <v-layout wrap>
            <v-flex xs12 sm6 md4
                    v-for="textField in detailsModel.fields.textFields"
                    :key="textField">
              <v-text-field
                :label="textField"
                v-model="editedItem[textField]"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 v-if="detailsModel.fields.password">
              <v-text-field
                :label="detailsModel.fields.password"
                type="password"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6
                    v-for="selectField in detailsModel.fields.selectFields"
                    :key="selectField.label"
            >
              <v-select
                :items="selectField.items"
                :label="selectField.label"
                v-model="editedItem[selectField.label]"
              ></v-select>
            </v-flex>
          </v-layout>-->
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="setEditedItem">Generuj PDF</v-btn>
      </v-card-actions>
    </v-card>

  </v-container>
</template>

<script>
  import clientModel from '../../models/clientsTableModel'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'SummaryDetails',
    props: ['id'],
    data () {
      return {
        clientModel,
        editedItem: {},
        clientDetails: []
      }
    },

    computed: {
      ...mapGetters([
        'getDetailItem',
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
        this.editedItem = Object.assign({}, this.getDetailItem)
      }

    },

    created () {
      this.setDetailsComponentFlag()
      this.setEditedItem()
      this.clientDetails = this.getTableItems({tableName: 'clients', parentId: 1, parentIdField: 'clientId'})
    },

    beforeRouteLeave () {
      this.disableDetailsComponentFlag()
    }

  }
</script>

<style scoped>

</style>

