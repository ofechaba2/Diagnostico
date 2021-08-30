<template>
  <v-data-table
    :headers="headers"
    :items="Caracterizacion"
    hide-default-footer
   
    class="elevation-1"
  >
 
  </v-data-table>
</template>

<script>
// import axios from "axios";
// import Chart from 'chart.js'
// import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../Db";
// import store from "store"


export default {
  data() {
    return {
      datos: [],
      stock: [],
      // Caracterizacion:[],
      // departamento: "",
// headers: [
//         { text: "depto", value: "departamento", sortable: false },      
// ],



      headers: [
        
        // {
        //   // text: "UWUWUWUWUWUWUWUW",
        //   align: "start",
        //   value: "value",
        // },
        { text: "Razón Social", value: "razonsocial" },
        { text: "NIT", value: "nit" },
        { text: "Forma Jurídica", value: "formaJuridica" },
        { text: "Departamento", value: "departamento" },
      ],
      Caracterizacion: [
        {
          nombre: "Razón Social",
          datos: "fecha",
        },
        {
          nombre: "NIT",
          datos: 'nst',
        },
        {
          name: "Forma Jurídica",
          datos: 262,
        },
        {
          name: "Departamento",
          datos: 305,
        },
      ],
    };
  },

  mounted() {
    this.selectArticulo();
  },

  methods: {
    //se debe dejar el async y el await para axios para que la grafica salga de una vez con los datos
    selectArticulo() {

     db.collection("Caracterizacion")
    .where('nit', "==",global.Gnit).get().then((querySnapshot) => {
       this.Caracterizacion=[];
      querySnapshot.forEach((doc) => {
         this.Caracterizacion.push({
            departamento:doc.data().departamento,
            nit:doc.data().nit,
            formaJuridica:doc.data().formaJuridica,
            razonsocial:doc.data().razonsocial,
          })
        console.log(doc.data.length+" cadena");
          
      })
    }) 
    }
  }
}
</script>

