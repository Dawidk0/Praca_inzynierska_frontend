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
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="index == 0 ?
            clientDetails
            :getTableItems({tableName: model.tableName[index], parentId: id, parentIdField: 'weddingReceptionId'})"
            class="elevation-1"
            hide-actions
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-right" v-for="(field, keyy, indexs) in headers">
                 {{field.relation ?
                getRelationName(
                {tableName: field.fromTable,
                propsToCompare: field.value,
                props: Number(props.item[field.value]),
                propsToShow: field.toShow
                })
                :props.item[field.value]
                }}
              </td>
            </template>
          </v-data-table>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="createPDF">Generuj PDF</v-btn>
      </v-card-actions>
    </v-card>

  </v-container>
</template>

<script>
  import model from '../../models/summaryWeddingReceptionModel'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'SummaryDetails',
    props: ['id'],
    data () {
      return {
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
      /* eslint-disable */
      createPDF () {
        var jsPDF = require('jspdf')
        require('jspdf-autotable')
        var vm = this
        var columns = vm.model.tableLabels
        var rows = [
          [1, 'Shaw', 'Tanzania'],
          [2, 'Nelson', 'Kazakhstan'],
          [3, 'Garcia', 'Madagascar']
        ]
        var result = Object.keys(obj).map(function(key) {
          return [Number(key), obj[key]];
        });

        console.log(result);
        // var doc = new jsPDF('p', 'pt')
        // doc.autoTable(vm.model.tableLabels, rows)
        // doc.save('table.pdf')
      }

    },

    created () {
      this.setDetailsComponentFlag()
      this.clientDetails = this.getTableItems({tableName: 'clients', parentId: this.id, parentIdField: 'clientId'})
    },

    beforeRouteLeave () {
      this.disableDetailsComponentFlag()
    }

  }
</script>

<style scoped>

</style>

