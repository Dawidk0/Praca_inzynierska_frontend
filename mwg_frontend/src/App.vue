<template>
  <v-app>
    <v-layout>
    <v-navigation-drawer
      style="width: 250px"
      :clipped="$vuetify.breakpoint.mdAndUp"
      v-model="showDrawer"
      fixed
      app
      v-if="isAuthenticated"
    >
      <v-list>
        <v-list-tile
          v-for="item in categories"
          :key="item.title"
          router
          :to="item.to">
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
        <v-toolbar-side-icon
          @click.stop="showDrawer = !showDrawer"
          v-if="isAuthenticated"
        ></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Weselichooo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat v-if="isAuthenticated" @click="logoutMethod()">
        <v-icon left >{{ logoutButton.icon }}</v-icon>
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
  import { mapMutations, mapGetters } from 'vuex'
  import { menus } from './mocks/menus'
  import { suppliers } from './mocks/suppliers'
  import { ingredients } from './mocks/ingredients'
  import { ingredientTypes } from './mocks/ingredientTypes'
  import { meals } from './mocks/meals'
  import { mealTypes } from './mocks/mealTypes'
  import { clients } from './mocks/clients'
  import { accounts } from './mocks/accounts'
  import { additionTypes } from './mocks/additionTypes'
  import { mealIngredients } from './mocks/mealIngredients'
  import { beds } from './mocks/beds'
  import { additions } from './mocks/additions'
  import { weddingReceptions } from './mocks/weddingReceptions'
  import { bookings } from './mocks/bookings'
  import { weddingReceptionMeals } from './mocks/weddingReceptionMeals'
  import { weddingAdditions } from './mocks/weddingAdditions'
  import { mealInMenus } from './mocks/mealInMenus'
  import Router from './router/index'
  import {store} from './store/index'

Router.beforeEach(
  (to, form, next) => {
    if (to.matched.some(record => record.meta.forAll)) {
      next()
    } else {
      // eslint-disable-next-line
      if (store.state.isAuthenticated == true) { next() } else next({path: '/login'})
    }
    next()
  }
)

  export default {
    data () {
      return {
        showDrawer: true,
        logoutButton: {icon: 'insert_emoticon', title: 'Wyloguj'},
        categories: [
          {icon: 'contacts', title: 'Menu', to: '/menus'},
          {icon: 'history', title: 'Dania', to: '/meals'},
          {icon: 'content_copy', title: 'Wesela', to: '/weddingReceptions'},
          {icon: 'content_copy', title: 'Noclegi', to: '/bookings'},
          {icon: 'content_copy', title: 'Składniki', to: '/ingredients'},
          {icon: 'content_copy', title: 'Dodatki na weselu', to: '/weddingAdditions'},
          {icon: 'content_copy', title: 'Dostawcy', to: '/suppliers'},
          {icon: 'content_copy', title: 'Dodatki', to: '/additions'},
          {icon: 'content_copy', title: 'Klienci', to: '/clients'},
          {icon: 'content_copy', title: 'Podsumowanie', to: '/summary'},
          {icon: 'content_copy', title: 'Zamówienia', to: '/orders'},
          {icon: 'content_copy', title: 'Panel klienta', to: '/client-panel/1'}
        ],
        menus
      }
    },
    computed: {
      ...mapGetters([
        'isAuthenticated'
      ])
    },

    methods: {
      ...mapMutations([
        'saveMenus',
        'logout'
      ]),
      logoutMethod () {
        this.logout()
        Router.push('/login')
      }
    },

    created () {
      this.$store.commit('saveTable', {table: menus, name: 'menus'})
      this.$store.commit('saveTable', {table: suppliers, name: 'suppliers'})
      this.$store.commit('saveTable', {table: ingredients, name: 'ingredients'})
      this.$store.commit('saveTable', {table: ingredientTypes, name: 'ingredientTypes'})
      this.$store.commit('saveTable', {table: meals, name: 'meals'})
      this.$store.commit('saveTable', {table: mealTypes, name: 'mealTypes'})
      this.$store.commit('saveTable', {table: clients, name: 'clients'})
      this.$store.commit('saveTable', {table: accounts, name: 'accounts'})
      this.$store.commit('saveTable', {table: additionTypes, name: 'additionTypes'})
      this.$store.commit('saveTable', {table: mealIngredients, name: 'mealIngredients'})
      this.$store.commit('saveTable', {table: beds, name: 'beds'})
      this.$store.commit('saveTable', {table: additions, name: 'additions'})
      this.$store.commit('saveTable', {table: weddingReceptions, name: 'weddingReceptions'})
      this.$store.commit('saveTable', {table: bookings, name: 'bookings'})
      this.$store.commit('saveTable', {table: weddingReceptionMeals, name: 'weddingReceptionMeals'})
      this.$store.commit('saveTable', {table: weddingAdditions, name: 'weddingAdditions'})
      this.$store.commit('saveTable', {table: mealInMenus, name: 'mealInMenus'})
      // WAZNE DODAC DO store.state
    }
  }
</script>
