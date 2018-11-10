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
          v-for="item in menuItems"
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
        <span class="hidden-sm-and-down">Zagroda Biesiadna</span>
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
  export default {
    data () {
      return {
        showDrawer: true,
        logoutButton: { icon: 'insert_emoticon', title: 'Wyloguj' },
        menuItems: [
          { icon: 'contacts', title: 'Menu', tos: '/table' },
          { icon: 'history', title: 'Dania', tos: '/table2' },
          { icon: 'content_copy', title: 'Wesela', tos: '/table2' },
          { icon: 'content_copy', title: 'Noclegi', tos: '/table2' },
          { icon: 'content_copy', title: 'Składniki', tos: '/table2' },
          { icon: 'content_copy', title: 'Dostawcy', tos: '/table2' },
          { icon: 'content_copy', title: 'Dodatki', tos: '/table2' },
          { icon: 'content_copy', title: 'Klienci', tos: '/table2' },
          { icon: 'content_copy', title: 'Zamówienia', tos: '/table2' }
        ]
      }
    }
  }
</script>
