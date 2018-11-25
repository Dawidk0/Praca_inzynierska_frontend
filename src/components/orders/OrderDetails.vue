<template>
<v-container grid-list-xl text-xs-center>
  <v-layout row wrap>
  <v-flex xs12 v-for="supplier in suppliers" :key="supplier.name" >
    <v-card >
    <v-card-title>
    {{supplier.name}}
    </v-card-title>
      <v-card-text>
    <v-data-table
      :headers=headers2
      :items="getGroupedIngredients(supplier.supplierId)"
      class="elevation-1"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right" v-for="(value,key,index) in headers2">
          {{key == 0 ? props.item.key : key == 1 ? props.item.values[0].value.amount: props.item.values[0].key }}
        </td>
      </template>
    </v-data-table>
      </v-card-text>
    </v-card>
  </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import * as d3a from 'd3-array'
  import * as d3 from 'd3-collection'

  export default {
    name: 'OrderDetails',
    props: ['id'],
    data () {
      return {
        groupedIngredients: [],
        meals: [],
        mealIngredients: [],
        ingredients: [],
        suppliers: [],
        headers: [
          {text: 'Danie', value: 'mealId', relation: true, fromTable: 'meals', toShow: 'name', selectField: true},
          {text: 'Liczba osób', value: 'numberOfPeople'},
          {text: 'Komentarz', value: 'comment'}
        ],
        headers2: [
          {text: 'Składnik', value: 'name'},
          {text: 'Ilość', value: 'amount'},
          {text: 'Jednostka', value: 'unit'}
        ]
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
      getGroupedIngredients (supplierId) {
        return d3.nest()
          .key(function (d) { return d.name })
          .key(function (d) { return d.shoppingUnit })
          .rollup(function (leaves) {
            return { 'shoppingUnit': leaves.shoppingUnit, 'amount': d3a.sum(leaves, function (d) { return d.amount })
            }
          })
          // eslint-disable-next-line
          .entries(this.ingredients.filter(x => x.supplierId == supplierId))
      }
    },

    created: function () {
      var vm = this
      vm.meals = vm.getTableItems({
        tableName: 'weddingReceptionMeals',
        parentId: this.id,
        parentIdField: 'weddingReceptionId'
      }).slice()
      vm.meals.forEach(function (meal) {
        vm.mealIngredients = vm.mealIngredients.concat(
          vm.getTableItems({tableName: 'mealIngredients', parentId: meal.mealId, parentIdField: 'mealId'}))
      })
      vm.mealIngredients.forEach(function (ingredient) {
        vm.ingredients = vm.ingredients.concat(
          vm.getTableItems({
            tableName: 'ingredients',
            parentId: ingredient.ingredientId,
            parentIdField: 'ingredientId'
          })
        )
      })
      var tempSuppliers = []
      vm.ingredients.forEach(function (ingredient) {
        tempSuppliers.push(ingredient.supplierId)
      })
      tempSuppliers = Array.from(new Set(tempSuppliers))
      tempSuppliers.forEach(function (supplierId) {
        vm.suppliers = vm.suppliers.concat(
          vm.getTableItems({tableName: 'suppliers', parentId: supplierId, parentIdField: 'supplierId'})
      )
      })
    }

  }
</script>

<style scoped>

</style>
