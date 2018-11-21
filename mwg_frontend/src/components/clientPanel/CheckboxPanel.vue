<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span class="headline" > Przyjęcie weselne: {{weddingReception.weddingReceptionId}} </span>
        {{selected}}
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-data-table
            v-model="selected.weddingReceptionMeals"
            :headers="model.headers.weddingReceptionMeals"
            :items="getTableItems({tableName: 'meals'})"
            hide-actions
            item-key="mealId"
            select-all
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>
                <v-checkbox
                  v-model="props.selected"
                  primary
                  hide-details
                ></v-checkbox>
              </td>
              <td>
                {{props.item.name}}
              </td>
              <td v-if="selected.weddingReceptionMeals.filter(x => x.mealId == props.item.mealId).length > 0">
                <v-text-field
                v-model="selected.weddingReceptionMeals.filter(x => x.mealId == props.item.mealId)[0].numberOfPeople">
                </v-text-field>
              </td>
              <td v-else>
                <v-text-field
                v-model="props.item.numberOfPeople">
                </v-text-field>
              </td>
              <td v-if="selected.weddingReceptionMeals.filter(x => x.mealId == props.item.mealId).length > 0">
                <v-text-field
                v-model="selected.weddingReceptionMeals.filter(x => x.mealId == props.item.mealId)[0].comment">
                </v-text-field>
              </td>
              <td v-else>
                <v-text-field
                v-model="props.item.comment">
                </v-text-field>
              </td>
            </template>
          </v-data-table>
        </v-container>

        <v-container>
          <v-data-table
            v-model="selected.weddingAdditions"
            :headers="model.headers.weddingAdditions"
            :items="getTableItems({tableName: 'additions'})"
            hide-actions
            item-key="additionId"
            select-all
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>
                <v-checkbox
                  v-model="props.selected"
                  primary
                  hide-details
                ></v-checkbox>
              </td>
              <td>
                {{props.item.name}}
              </td>
              <td v-if="selected.weddingAdditions.filter(x => x.additionId == props.item.additionId).length > 0">
                <v-text-field
                v-model="selected.weddingAdditions.filter(x => x.additionId == props.item.additionId)[0].description">
                </v-text-field>
              </td>
              <td v-else>
                <v-text-field
                v-model="props.item.description">
                </v-text-field>
              </td>
            </template>
          </v-data-table>
        </v-container>

        <v-container>
          <v-data-table
            v-model="selected.bookings"
            :headers="model.headers.bookings"
            :items="getTableItems({tableName: 'beds'})"
            hide-actions
            item-key="bedId"
            select-all
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>
                <v-checkbox
                  v-model="props.selected"
                  primary
                  hide-details
                ></v-checkbox>
              </td>
              <td>
                {{props.item.name}}
              </td>

              <td>
                <template v-if="selected.bookings.filter(x => x.bedId == props.item.bedId).length > 0">
                  <v-menu
                    :close-on-content-click="false"
                    v-model="selected.bookings.filter(x => x.bedId == props.item.bedId)[0].input"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      v-model="selected.bookings.filter(x => x.bedId == props.item.bedId)[0].dateIn"
                      label="Data przyjazdu"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-date-picker v-model="selected.bookings.filter(x => x.bedId == props.item.bedId)[0].dateIn" @input="selected.bookings.filter(x => x.bedId == props.item.bedId)[0].input = false"></v-date-picker>
                  </v-menu>
                </template>

                <template v-else>
                  <v-menu
                    :close-on-content-click="false"
                    v-model="props.item.output"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                  >
                    <v-text-field
                      slot="activator"
                      v-model="props.item.dateOut"
                      label="Data wyjazdu"
                      prepend-icon="event"
                      readonly
                    ></v-text-field>
                    <v-date-picker v-model="props.item.dateOut" @input="props.item.output = false"></v-date-picker>
                  </v-menu>
                </template>
              </td>

              <td>
                <template v-if="selected.bookings.filter(x => x.bedId == props.item.bedId).length > 0">
                <v-menu
                  :close-on-content-click="false"
                  v-model="selected.bookings.filter(x => x.bedId == props.item.bedId)[0].output"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                    <v-text-field
                    slot="activator"
                    v-model="selected.bookings.filter(x => x.bedId == props.item.bedId)[0].dateOut"
                    label="Data wyjazdu"
                    prepend-icon="event"
                    readonly
                    ></v-text-field>
                    <v-date-picker v-model="selected.bookings.filter(x => x.bedId == props.item.bedId)[0].dateOut" @input="selected.bookings.filter(x => x.bedId == props.item.bedId)[0].output = false"></v-date-picker>
                </v-menu>
                </template>

                <template v-else>
                <v-menu
                  :close-on-content-click="false"
                  v-model="props.item.output"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                    <v-text-field
                    slot="activator"
                    v-model="props.item.dateOut"
                    label="Data wyjazdu"
                    prepend-icon="event"
                    readonly
                    ></v-text-field>
                    <v-date-picker v-model="props.item.dateOut" @input="props.item.output = false"></v-date-picker>
                </v-menu>
                </template>
              </td>

              <td v-if="selected.bookings.filter(x => x.bedId == props.item.bedId).length > 0">
                <v-text-field
                  v-model="selected.bookings.filter(x => x.bedId == props.item.bedId)[0].description">
                </v-text-field>
              </td>

              <td v-else>
                <v-text-field
                  v-model="props.item.description">
                </v-text-field>
              </td>

            </template>
          </v-data-table>
        </v-container>




        <!--<v-container-->
          <!--v-for="(headers,key,index) in model.headers" :key="key">-->
          <!--<v-card-title>-->
            <!--{{model.tableLabels[index]}}-->
          <!--</v-card-title>-->
          <!--<v-data-table-->
            <!--v-model="selected[key]"-->
            <!--:headers="headers"-->
            <!--:items="getTableItems({tableName: model.tableName[index]})"-->
            <!--class="elevation-1"-->
            <!--hide-actions-->
            <!--:item-key="model.itemKeysCheckbox[index]"-->
            <!--select-all-->
          <!--&gt;-->
            <!--<template slot="items" slot-scope="props">-->
              <!--<td>-->
                <!--<v-checkbox-->
                  <!--v-model="props.selected"-->
                  <!--primary-->
                  <!--hide-details-->
                <!--&gt;</v-checkbox>-->
              <!--</td>-->
              <!--<td class="text-xs-right"-->
                  <!--v-for="(field, k, i) in headers"-->
              <!--&gt;-->
                <!--<span v-if="!field.dateField && !field.textField">-->
                  <!--{{field.relation ?-->
                  <!--getRelationName(-->
                  <!--{tableName: field.fromTable,-->
                  <!--propsToCompare: field.value,-->
                  <!--props: Number(props.item[field.value]),-->
                  <!--propsToShow: field.toShow-->
                  <!--})-->
                  <!--:props.item[field.value]-->
                  <!--}}-->
                  <!--</span>-->
                <!--<v-text-field-->
                <!--v-if="field.textField"-->
                <!--v-model="props.item[field.value]"-->
                <!--&gt;-->

                <!--</v-text-field>-->
                <!--<v-menu-->
                  <!--v-if="field.dateField"-->
                  <!--:close-on-content-click="false"-->
                  <!--v-model="props.item[field.value]"-->
                  <!--:nudge-right="40"-->
                  <!--lazy-->
                  <!--transition="scale-transition"-->
                  <!--offset-y-->
                  <!--full-width-->
                  <!--min-width="290px"-->
                <!--&gt;-->
                  <!--<v-text-field-->
                    <!--v-if="field.dateField"-->
                    <!--slot="activator"-->
                    <!--v-model="props.item[field.value]"-->
                    <!--:label="field.text"-->
                    <!--prepend-icon="event"-->
                    <!--readonly-->
                  <!--&gt;</v-text-field>-->
                  <!--<v-date-picker v-model="ed[k]" @input="field.input = false"></v-date-picker>-->
                <!--</v-menu>-->
              <!--</td>-->
            <!--</template>-->
          <!--</v-data-table>-->
        <!--</v-container>-->
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
        weddingReception: -1,
        ed: {in: {}, out: {}},
        selected: {weddingReceptionMeals: [], weddingAdditions: [], bookings: []},
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
        'getClientId',
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
      createPDF () {
        this.editedItem = Object.assign({}, this.getDetailItem)
      }

    },

    created () {
      this.setDetailsComponentFlag()
      this.createPDF()
      this.clientDetails = this.getTableItems({tableName: 'clients', parentId: this.id, parentIdField: 'clientId'})
      this.weddingReception = this.getAccountDetail({tableName: 'weddingReceptions', value: this.id, field: 'clientId'})
      this.selected.weddingReceptionMeals = this.getTableItems({tableName: 'weddingReceptionMeals', parentId: this.weddingReception.weddingReceptionId, parentIdField: 'weddingReceptionId'})
      this.selected.weddingAdditions = this.getTableItems({tableName: 'weddingAdditions', parentId: this.weddingReception.weddingReceptionId, parentIdField: 'weddingReceptionId'})
      this.selected.bookings = this.getTableItems({tableName: 'bookings', parentId: this.weddingReception.weddingReceptionId, parentIdField: 'weddingReceptionId'})
    },

    beforeRouteLeave () {
      this.disableDetailsComponentFlag()
    }

  }
</script>

<style scoped>

</style>

