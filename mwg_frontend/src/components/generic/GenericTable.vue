<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{tableName}}
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Wyszukaj"
          single-line
          hide-details
        ></v-text-field>

      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex v-for="(index,key) in editedItem" :key="key" >
                  <v-text-field v-model="editedItem[key]" :label="key"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
    <v-data-table
      :headers="tableHeaders"
      :items="tableItems"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
          <td
           class="text-xs-right"
           v-for="i in props.item">
           {{i}}
          </td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <p>Brak danych</p>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  export default {
    props: ['tableName', 'tableHeaders', 'tableItems', 'dataModel'],
    data: () => ({
      search: '',
      dialog: false,
      editedIndex: -1,
      editedItem: {}
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },
    created () {
      this.editedItem = Object.assign({}, this.dataModel)
    },

    methods: {
      editItem (item) {
        this.editedIndex = this.tableItems.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.tableItems.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.tableItems.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.dataModel)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.tableItems[this.editedIndex], this.editedItem)
        } else {
          this.tableItems.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>

<style scoped>

</style>
