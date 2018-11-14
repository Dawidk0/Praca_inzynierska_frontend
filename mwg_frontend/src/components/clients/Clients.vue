<template>
  <v-container fluid>
    asdas
    <generic-table
      :tableModel="tableModel"
    ></generic-table>
  </v-container>
</template>

<script>
  import GenericTable from '../generic/GenericTable'
  import tableModel from '../../models/clientsTableModel'

  export default {
    name: 'Clients',
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
