<template>
  <v-container>
    <checkbox-panel :id="id"></checkbox-panel>
  </v-container>
</template>

<script>
  import CheckboxPanel from './CheckboxPanel'
  export default {
    props: ['id'],
    name: 'clientPanel',
    components: {
      CheckboxPanel
    }
  }
</script>

<style scoped>

</style>
