<template>
  <v-container>
    <generic-table
      :tableModel="tableModel"
    ></generic-table>
  </v-container>
</template>

<script>
  import { mapMutations } from 'vuex'
  import GenericTable from '../generic/GenericTable'
  import tableModel from '../../models/mealIngredientsTableModel'

  export default {
    name: 'MealDetails',
    props: ['id'],

    data () {
      return {
        tableModel
      }
    },

    components: {
      GenericTable
    },

    methods: {
      ...mapMutations([
        'setDetailsItemField'
      ])
    },

    created () {
      this.setDetailsItemField('ingredientId')
      this.tableModel.parentIdValue = this.id
    }
  }
</script>

<style scoped>

</style>
