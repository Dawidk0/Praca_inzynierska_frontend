<template>
  <v-container fluid>
    <generic-table
      :tableModel="tableModel"
    ></generic-table>
  </v-container>
</template>

<script>
  import GenericTable from '../generic/GenericTable'
  import tableModel from '../../models/bookingsTableModel'

  export default {
    name: 'Bookings',
    data () {
      return {
        tableModel
      }
    },

    components: {
      GenericTable
    }
  }
</script>

<style scoped>

</style>
