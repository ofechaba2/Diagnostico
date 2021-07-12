
<template>
  <v-app>
    <v-app-bar
      app
      color="pink darken-4"
      dark
    >
      <div class="d-flex align-center text-light">
        <v-img
          alt=""
          class="shrink mr-2"
          contain 
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        
      </div><h1>Diagnóstico y Gestión Empresarial</h1>

      <v-spacer></v-spacer>

      <v-btn
        @click="login"
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
     <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      color="pink darken-4"
      flat
      tile
    >


        <v-spacer></v-spacer>
   

      <v-card-text class="py-2 white--text text-center">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-5"
          dark
          icon
        >
          <v-icon size="20px">
            {{ icon }}
          </v-icon>
        </v-btn> <hr>
        {{ new Date().getFullYear() }} — <strong>2wayv</strong> 
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
  
 
</template>


<script>

import navegacion from './components/navegacion.vue';


export default {
  component:{
    navegacion,
  },
  name: 'App',

  data: () => ({
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
    
    
    methods: {

      login() {

        this.$router.push("./login");

      }
    },
  
};
</script>
