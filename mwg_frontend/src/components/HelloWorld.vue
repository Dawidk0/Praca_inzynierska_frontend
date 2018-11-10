<template>
  <v-container fluid>
    <GenericTable
      :tableName="tableName"
      :tableHeaders="tableHeaders"
      :tableItems="tableItems"
      :dataModel="dataModel"
    ></GenericTable>
  </v-container>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import GenericTable from './generic/GenericTable'

  export default {
    data () {
      return {
        test: this.$store.getters.sampelGetter,
        tableName: 'Crudy jakies',
        tableHeaders: [
            {text: 'Nazwa', value: 'nazwa'},
            {text: 'Opis', value: 'opis'},
            {text: 'Akcje', value: 'akcje'}
        ],
        tableItems: [
          {nazwa: '123', opis: '222'},
          {nazwa: 'abc', opis: 'bbb'}
        ],
        dataModel:
        {
          nazwa: '',
          opis: ''
        }
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
