<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span class="headline" ref="header"> Przyjęcie weselne nr {{id}} -
        {{this.getAccountDetail(
        {tableName: 'weddingReceptions', field: 'weddingReceptionId', value: this.$route.params.id})['weddingDate']}}</span>
      </v-card-title>
      <v-card-text>

        <v-container
          v-for="(headers,key,index) in model.headers" :key="key">
          <v-card-title>
         <h3> {{model.tableLabels[index]}}</h3>
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
              <tr :ref="model.tableName[index]" >
                <td class="text-xs-right" v-for="(field, innerIndex, k) in headers">
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
              </tr>
            </template>
            <template slot="no-data">
              <p class="justify-center layout px-0">Brak danych</p>
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
  import pdfMake from 'pdfmake/build/pdfmake'
  import pdfFonts from 'pdfmake/build/vfs_fonts'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'SummaryDetails',
    props: ['id'],
    data () {
      return {
        model,
        editedItem: {},
        clientDetails: []
      }
    },

    computed: {
      ...mapGetters([
        'getDetailItem',
        'getTableItems',
        'getRelationName',
        'getAccountDetail'
      ])
    },

    methods: {
      ...mapMutations([
        'setDetailsItem',
        'saveItem',
        'setDetailsComponentFlag',
        'disableDetailsComponentFlag'
      ]),

      createPDF: function () {
        let date = this.getAccountDetail({tableName: 'weddingReceptions', field: 'weddingReceptionId', value: this.$route.params.id})['weddingDate']
        var dd = { content: [] }
        var header = 'Wesele nr: ' + this.id + ' - ' +
          this.getAccountDetail(
          {tableName: 'weddingReceptions', field: 'weddingReceptionId', value: this.$route.params.id})['weddingDate']
        dd.content.push({text: header, fontSize: 14, bold: true, margin: [0, 20, 0, 8]})
        var index = 0
        for (var key in this.model.headers) {
          dd.content.push({text: model.tableLabels[index], fontSize: 14, bold: true, margin: [0, 20, 0, 8]})
          var parentHeader = this.model.headers[key]
          var headers = []
          for (var innerKey in parentHeader) {
            headers.push({text: parentHeader[innerKey].text, style: 'tableHeader'})
          }
          var table = {
            style: 'tableExample',
            table: {
              headerRows: 1,
              body: [headers
              ]
            },
            layout: 'headerLineOnly'
          }
          var section = this.model.tableName[index]
          var context = []
          for (var i in this.$refs[section]) {
            for (var cell in this.$refs[section][i].cells) {
              // eslint-disable-next-line
              if (cell != 'item' && cell != 'namedItem' && cell != 'length') {
                context.push(([this.$refs[section][i].cells[cell]][0].innerText))
              }
            }
            table.table.body.push(context)
            context = []
          }
          dd.content.push(table)
          index++
        }
        pdfMake.createPdf(dd).download('podusumowanie' + date + '.pdf')
      }

    },

    created () {
      this.setDetailsComponentFlag()
      this.clientDetails = this.getTableItems({tableName: 'clients', parentId: this.id, parentIdField: 'clientId'})
      pdfMake.vfs = pdfFonts.pdfMake.vfs
    },

    beforeRouteLeave () {
      this.disableDetailsComponentFlag()
    }

  }
</script>

<style scoped>

</style>

