<template>
  <v-container>
  <summary-wedding-reception :id="id">

  </summary-wedding-reception>
  </v-container>
</template>

<script>
  import SummaryWeddingReception from './SummaryWeddingReception'

export default {
    props: ['id'],
    name: 'SummaryDetails',
    components: {
      SummaryWeddingReception
    }
  }
</script>

<style scoped>

</style>
