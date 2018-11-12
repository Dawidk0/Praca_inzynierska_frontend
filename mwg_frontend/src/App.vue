<template>
  <v-app>
    <v-layout>
    <v-navigation-drawer
      style="width: 250px"
      :clipped="$vuetify.breakpoint.mdAndUp"
      v-model="showDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="item in categories"
          :key="item.title"
          router
          :to="item.tos">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="showDrawer = !showDrawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Weselichooo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <v-icon left>{{ logoutButton.icon }}</v-icon>
        {{logoutButton.title}}
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    </v-layout>
  </v-app>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { menus } from './mocks/menus'
  import { suppliers } from './mocks/suppliers'
  import { ingredients } from './mocks/ingredients'
  import { ingredientTypes } from './mocks/ingredientTypes'
  import { meals } from './mocks/meals'
  import { mealTypes } from './mocks/mealTypes'

  export default {
    data () {
      return {
        showDrawer: true,
        logoutButton: {icon: 'insert_emoticon', title: 'Wyloguj'},
        categories: [
          {icon: 'contacts', title: 'Menu', tos: '/'},
          {icon: 'history', title: 'Dania', tos: '/meals'},
          {icon: 'content_copy', title: 'Wesela', tos: '/'},
          {icon: 'content_copy', title: 'Noclegi', tos: '/table2'},
          {icon: 'content_copy', title: 'Składniki', tos: '/ingredients'},
          {icon: 'content_copy', title: 'Dostawcy', tos: '/suppliers'},
          {icon: 'content_copy', title: 'Dodatki', tos: '/table2'},
          {icon: 'content_copy', title: 'Klienci', tos: '/table2'},
          {icon: 'content_copy', title: 'Zamówienia', tos: '/table2'}
        ],
        menus
      }
    },

    methods: {
      ...mapMutations([
        'saveMenus'
      ])
    },

    created () {
      this.$store.commit('saveTable', {table: menus, name: 'menus'})
      this.$store.commit('saveTable', {table: suppliers, name: 'suppliers'})
      this.$store.commit('saveTable', {table: ingredients, name: 'ingredients'})
      this.$store.commit('saveTable', {table: ingredientTypes, name: 'ingredientTypes'})
      this.$store.commit('saveTable', {table: meals, name: 'meals'})
      this.$store.commit('saveTable', {table: mealTypes, name: 'mealTypes'})
      // WAZNE DODAC DO store.state
    }
  }
</script>
