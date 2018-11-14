<template>
  <v-container>
    <generic-details
      :detailsModel="detailsModel"
    ></generic-details>
    MENUS DETAILS ?!?!??!
    <generic-table
    :tableModel="tableModel"
    ></generic-table>
  </v-container>
</template>

<script>
  import GenericTable from '../generic/GenericTable'
  import GenericDetails from '../generic/GenericDetails'
  import tableModel from '../../models/menusTableModel'
  import detailsModel from '../../models/menusDetailsModel'

  export default {
    name: 'MenuDetails',
    data () {
      return {
        tableModel,
        detailsModel
      }
    },
    components: {
      GenericTable,
      GenericDetails
    }
  }
</script>

<style scoped>

</style>
