<template>
    <v-container>
      <v-layout row wrap align-center justify-center>
      <v-flex xs12 lg5 >
        <v-card m5 p5 >
          <v-container >
            <v-card-title primary-title>
              <div>
              <div class="headline">Często zadawane pytania - przyjęcie weselne</div>
              <span class="grey--text">Związane z przebiegiem przyjęcia weselnego</span>
            </div>
            </v-card-title>
        <v-expansion-panel expand popout>
          <v-expansion-panel-content
            v-for="item in weddingFaqs"
            :key="item.question"
          >
            <div slot="header" >
              <h3 >
                {{item.question}} </h3>
            </div>
            <v-card>
              <v-card-text>
                {{item.answer}}
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
          </v-container>
        </v-card>
      </v-flex>
        <v-flex xs12 lg5 offset-lg1>
          <v-card m5 p5>
            <v-container >
              <v-card-title primary-title>
                <div>
                  <div class="headline">Często zadawane pytania - organizacja</div>
                  <span class="grey--text">Związane z organizacją przyjęcia weselnego</span>
                </div>
              </v-card-title>
              <v-expansion-panel expand popout>
                <v-expansion-panel-content
                  v-for="item in organizationFaqs"
                  :key="item.question"
                >
                  <div slot="header" >
                    <h3 >
                      {{item.question}} </h3>
                  </div>
                  <v-card>
                    <v-card-text>
                      {{item.answer}}
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-container>
          </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
  import {weddingFaqs, organizationFaqs} from '../../mocks/faqs'

  export default {
    name: 'Faq',
    data () {
      return {
        weddingFaqs,
        organizationFaqs
      }
    }
  }
</script>

<style scoped>

</style>
