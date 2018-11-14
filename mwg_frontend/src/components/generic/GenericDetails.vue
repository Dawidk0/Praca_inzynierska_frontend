<template>
    <v-container>
      <v-card>
        <v-card-title>
          <span class="headline" > {{editedItem[detailsModel.fields.header]}}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4
                      v-for="textField in detailsModel.fields.textFields"
                      :key="textField">
                <v-text-field
                  :label="textField"
                  v-model="editedItem[textField]"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 v-if="detailsModel.fields.password">
                <v-text-field
                  :label="detailsModel.fields.password"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6
                      v-for="selectField in detailsModel.fields.selectFields"
                      :key="selectField.label"
              >
                <v-select
                  :items="selectField.items"
                  :label="selectField.label"
                  v-model="editedItem[selectField.label]"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="setEditedItem">Restart</v-btn>
          <v-btn color="blue darken-1" flat @click.native="saveItem(editedItem)">Save</v-btn>
        </v-card-actions>
      </v-card>

    </v-container>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    props: ['detailsModel'],
    name: 'GenericDetails',

    data () {
      return {
        editedItem: {}
      }
    },

    computed: {
      ...mapGetters([
        'getDetailItem'
      ])
    },

    methods: {
      ...mapMutations([
        'setDetailsItem',
        'saveItem',
        'setDetailsComponentFlag',
        'disableDetailsComponentFlag'
      ]),
      setEditedItem () {
        this.editedItem = Object.assign({}, this.getDetailItem)
      }

    },

    created () {
      this.setDetailsComponentFlag()
      this.setEditedItem()
    },

    beforeRouteLeave () {
      this.disableDetailsComponentFlag()
    }

  }
</script>

<style scoped>

</style>
