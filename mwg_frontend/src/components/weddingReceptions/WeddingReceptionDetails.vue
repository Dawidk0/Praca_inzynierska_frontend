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
  import GenericDetails from '../generic/GenericDetails'
  import tableModel from '../../models/weddingReceptionMealsTableModel'

  export default {
    name: 'WeddingReceptionDetails',
    props: ['id'],

    data () {
      return {
        tableModel
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
      this.setDetailsItemField('weddingReceptionId')
      this.tableModel.parentIdValue = this.id
    }
  }
</script>

<style scoped>

</style>
