<template>
  <v-container fluid>
      <generic-table
        :tableModel="tableModel"
      ></generic-table>
  </v-container>
</template>

<script>
  import GenericTable from '../generic/GenericTable'
  import tableModel from '../../models/menusTableModel'

  export default {
    name: 'Menus',
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
