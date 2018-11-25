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
  import tableModel from '../../models/mealInMenusTableModel'

  export default {
    name: 'MenuDetails',
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
      this.setDetailsItemField('mealId')
      this.tableModel.parentIdValue = this.id
    }
  }
</script>

<style scoped>

</style>
