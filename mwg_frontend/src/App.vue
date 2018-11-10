<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="showSideNav =!showSideNav"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left class="primary">supervisor_account</v-icon>
          Wyloguj
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="showSideNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-conetent>
            Cos tam
          </v-list-tile-conetent>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      showSideNav: false
    }
  }
}
</script>
