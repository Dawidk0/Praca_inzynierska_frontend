<template>
<v-container>
  <v-layout>
    <v-flex xs 12 sm6 offset-sm3>
      <v-card>
        <v-card-text>
          <v-container>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="Login"
                    label="Login"
                    id="login"
                    v-model="user.login"
                    required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Hasło"
                    id="password"
                    v-model="user.password"
                    type="password"
                    required>
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12>
                  <v-btn @click="loginMethod">Zaloguj</v-btn>
                </v-flex>
              </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  import swal from 'sweetalert2'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'LoginPanel',
    data () {
      return {
        user: {
          login: 'admin',
          password: 'admin'
        }
      }
    },
    computed: {
      ...mapGetters([
        'getDetailItem',
        'getTableItems',
        'getRelationName',
        'authentication'
      ])
    },

    methods: {
      ...mapMutations([
        'setDetailsItem',
        'saveItem',
        'setDetailsComponentFlag',
        'setRole'
      ]),
      loginMethod () {
        var status = this.authentication(this.user)
        if (status) {
          this.setRole(this.user)
          this.user = {
            login: '',
            password: ''
          }
          this.$router.push({name: 'Main'})
        } else {
          swal({
            title: 'Błąd!',
            text: 'Niepoprawny login lub hasło',
            type: 'error'
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
