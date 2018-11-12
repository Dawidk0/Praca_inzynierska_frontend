<template>
  <v-container fluid>
  <!--  <generic-table
      :tableModel="tableModel"
    ></generic-table> -->
  </v-container>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import GenericTable from './generic/GenericTable'
  import tableModel from '../models/menuTableModel'

  export default {
    data () {
      return {
        test: this.$store.getters.sampelGetter,
        tableModel
      }
    },
    computed: {
      ...mapGetters([
        'sampelGetter'
      ])
    },
    methods: {
      ...mapMutations([
        'doSmth'
      ]),
      ...mapActions([
        'waitAndDo'
      ])
    },
    components: {
      GenericTable
    }
  }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
