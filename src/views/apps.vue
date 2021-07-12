<template>
  <v-app id="inspire" >  

    <v-app-bar app fluid clipped-left v-if="this.$store.state.token && currentRouteName != 'Login'"> 
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <navegacion v-if="this.$store.state.token && currentRouteName != 'Login'"></navegacion>

    <v-main class="grey lighten-2">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Navegacion from "./components/Navgacion.vue";
export default {
  name: 'App',

  components: {

    Navegacion
  },
   computed:{
     currentRouteName(){
       return this.$route.name
     }
   },
  data: () => ({ 
    drawer: null 
  }),
};
</script>
