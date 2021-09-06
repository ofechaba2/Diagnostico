<template>
  <v-data-table
    :headers="headers"
    :items="Diagnostico"
    hide-default-footer
    class="elevation-1"
  ></v-data-table>
</template>


<script>
import firebase from "firebase/app";
import "firebase/firestore";
  export default {  
    data () {
      return {
     
             Diagnostico:[],
      headers: [   
        {
          text: "PROCESO",
          align: "start",
          value: "nombre",
        },
        { text: "PUNTAJE", value: "datos" },
        { text: "ESTADO", value: "datos" },
      ],
    };
  },

  mounted() {
    this.selectArticulo();
  },
  methods: {
    selectArticulo() {
      if (!firebase.apps.length) {
        firebase.initializeApp(this.firebaseConfig);
      }
      firebase 
      .firestore().collection("Diagnostico").onSnapshot((snapshotChange)=>{
        this.Diagnostico=[];
        snapshotChange.forEach((doc)=>{
          this.Diagnostico.push({
            nombre:doc.data().nombre,
            datos:doc.data().datos,
          })
        })
      })
      }
    }
  }
</script>