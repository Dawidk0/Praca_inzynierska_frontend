<template>
  <v-container>
    <checkbox-panel :id="getClientId"></checkbox-panel>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CheckboxPanel from './CheckboxPanel'

  export default {
    name: 'clientPanel',
    components: {
      CheckboxPanel
    },
    computed: {
      ...mapGetters([
        'getClientId'
      ])
    }
  }
</script>

<style scoped>

</style>
