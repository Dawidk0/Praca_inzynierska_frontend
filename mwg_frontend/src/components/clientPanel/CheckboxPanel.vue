<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span class="headline" > Przyjęcie weselne nr {{id}}</span>
      </v-card-title>
      <v-card-text>

        <v-container
          v-for="(headers,key,index) in model.headers" :key="key">
          <v-card-title>
            {{model.tableLabels[index]}}
          </v-card-title>{{selected}}
          <v-data-table
            v-model="selected[key]"
            :headers="headers"
            :items="getTableItems({tableName: model.tableName[index]})"
            class="elevation-1"
            hide-actions
            :item-key="model.itemKeysCheckbox[index]"
            select-all
          >
            <template slot="items" slot-scope="props">
              <td>
                <v-checkbox
                  v-model="props.selected"
                  primary
                  hide-details
                ></v-checkbox>
              </td>
              <td class="text-xs-right"
                  v-for="(field, k, i) in headers"
              >
                <span v-if="!field.dateField && !field.textField">
                  {{field.relation ?
                  getRelationName(
                  {tableName: field.fromTable,
                  propsToCompare: field.value,
                  props: Number(props.item[field.value]),
                  propsToShow: field.toShow
                  })
                  :props.item[field.value]
                  }}
                  </span>
                <v-text-field
                v-if="field.textField">

                </v-text-field>
                <v-menu
                  v-if="field.dateField"
                  :close-on-content-click="false"
                  v-model="field.input"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="ed[k]"
                    :label="field.text"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="ed[k]" @input="field.input = false"></v-date-picker>
                </v-menu>
              </td>
            </template>
          </v-data-table>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="setEditedItem">Zapisz</v-btn>
      </v-card-actions>
    </v-card>

  </v-container>
</template>

<script>
  import model from '../../models/clientPanelModel'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'CheckboxPanel',
    props: ['id'],
    data () {
      return {
        ed: {in: {}, out: {}},
        selected: {},
        model,
        editedItem: {},
        clientDetails: [{weddingDate: '12'}]
      }
    },

    computed: {
      ...mapGetters([
        'getDetailItem',
        'getTableItems',
        'getRelationName'
      ])
    },

    methods: {
      ...mapMutations([
        'setDetailsItem',
        'saveItem',
        'setDetailsComponentFlag',
        'disableDetailsComponentFlag'
      ]),
      createPDF () {
        this.editedItem = Object.assign({}, this.getDetailItem)
      }

    },

    created () {
      this.setDetailsComponentFlag()
      this.createPDF()
      this.clientDetails = this.getTableItems({tableName: 'clients', parentId: this.id, parentIdField: 'clientId'})
    },

    beforeRouteLeave () {
      this.disableDetailsComponentFlag()
    }

  }
</script>

<style scoped>

</style>

