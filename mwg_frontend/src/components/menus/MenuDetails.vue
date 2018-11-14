<template>
  <v-container>
    <generic-details
      :detailsModel="detailsModel"
    ></generic-details>
    <generic-table
    :tableModel="tableModel"
    ></generic-table>
  </v-container>
</template>

<script>
  import { mapMutations } from 'vuex'
  import GenericTable from '../generic/GenericTable'
  import GenericDetails from '../generic/GenericDetails'
  import tableModel from '../../models/mealInMenusTableModel'
  import detailsModel from '../../models/menusDetailsModel'

  export default {
    name: 'MenuDetails',
    props: ['id'],

    data () {
      return {
        tableModel,
        detailsModel
      }
    },

    components: {
      GenericTable,
      GenericDetails
    },

    methods: {
      ...mapMutations([
        'setDetailsItemField'
      ])
    },

    created () {
      this.setDetailsItemField('mealId')
      this.tableModel.parentIdValue = this.id
    }
  }
</script>

<style scoped>

</style>
