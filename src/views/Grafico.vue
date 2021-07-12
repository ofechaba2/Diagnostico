<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-5' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-5">
        <v-tab v-for="link in links" :key="link">
          <button class="guardar"></button>
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        @click="guardar"
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-5">
      <v-container>
        <v-row>
          <v-col style="text-align: center" cols="12" sm="8">
            <v-sheet rounded="lg" min-height="150">
              <!--  -->
              <formComponenete />
            </v-sheet>
          </v-col>
          <v-col style="text-align: center" cols="12" sm="4">
            <v-sheet rounded="lg" min-height="150">
              <!--  --><form3 />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  --><form2 />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <!--  --><v-data-table
                :headers="headers"
                :items="desserts"
                hide-default-footer
                class="elevation-1"
              ></v-data-table>
            </v-sheet>
          </v-col>
         
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268"> <!--  -->4{{this.valor}} {{this.nit}} </v-sheet>
          </v-col>
         
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import formComponenete from "../components/formComponente";
import form2 from "../components/form2";
import form3 from "../components/form3";

export default {
  components: {
    formComponenete,
    form2,
    form3,
  },
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],

    valor: global.GsectorEconomia,
    sector: global.GsectorEconomia,
    razon: global.Grazonsocial,
    nit: global.Gnit,
    departamento: global.Gdepartamento,
    forma: global.Gformajuridica,
    

     headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            value: 'name',
          },
          { text: 'Calories', value: 'valor' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            valor: this.valor,

          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
        ],

    e6: 1,
    valid: false,
  }),
  methods: {
    guardar() {
        console.log(this.valor),
        console.log(this.sector),
        console.log(this.nit),
        console.log(this.departamento),
        console.log(this.forma),
        console.log(this.razon);
    },
  },
};
</script>


  
  