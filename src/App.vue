<template>
  <v-app>
    <v-app-bar app fluid clipped-left class="pink darken-4" dark>
      <div class="d-flex align-center white--text">
        <v-img
          alt=""
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <h1>Diagnóstico y Gestión Empresarial</h1>
      <v-spacer></v-spacer>
      <v-btn @click="login" target="_blank" text>
        <span class="mr-2">Login</span>
        <v-icon @click="inicioSesion">mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <navegacion v-if="this.estado == true"></navegacion>
    <footer />
    <v-main class="light">
      <v-container>
        <router-view></router-view>
        
        <footer></footer>
      </v-container>
    </v-main>
    <v-footer dark padless>
      <v-card class="flex" color="pink darken-4" flat tile>
        <v-spacer></v-spacer>

        <v-card-text class="py-2 white--text text-center">
          <v-btn v-for="icon in icons" :key="icon" class="mx-5" dark icon>
            <v-icon size="20px">
              {{ icon }}
            </v-icon>
          </v-btn>
          <hr />
          {{ new Date().getFullYear() }} — <strong>2wayv</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import navegacion from "@/components/Navgacion.vue";

import firebase from "firebase";
import "firebase/app";
import "firebase/auth";
// import footer from "@/components/footer.vue";

export default {
  name: "App",

  components: {
    
    // footer,
    navegacion,
  },
  computed: {},
  

  data: () => ({
    estado: false,
    drawer: null,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods: {
    login(){
        this.$router.push("./login");        
      },
    inicioSesion() {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
.then(() => {
      
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.estado = true;
          console.log(this.estado);

          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // var uid = user.uid;
          // ...
        } else {
          alert;
          // console.log(uid);
          // User is signed out
          // ...
        }
      });
      })
    },
    
  },
  mounted() {
    this.inicioSesion();
  },
}
</script>

