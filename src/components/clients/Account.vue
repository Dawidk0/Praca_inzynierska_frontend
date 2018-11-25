<template>
    <v-container>
      <generic-details :detailsModel="detailsModel" :id="id"></generic-details>
    </v-container>
</template>

<script>
  import GenericDetails from '../generic/GenericDetails'
  import detailsModel from '../../models/accountDetailsModel'

  export default {
    props: ['id'],
    name: 'Account',
    data: function () {
      return {
        detailsModel
      }
    },
    components: {
      GenericDetails
    }
  }
</script>

<style scoped>

</style>
