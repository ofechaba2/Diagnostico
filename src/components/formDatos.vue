<template>
  <v-data-table
    :headers="headers"
    :items="states"
    hide-default-footer
    hide-default-header
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
      Caracterizacion:[],
      // departamento: "",
// headers: [
//         { text: "depto", value: "departamento", sortable: false },      
// ],



      headers: [
        
        {
          text: "UWUWUWUWUWUWUWUW",
          align: "start",
          value: "name",
        },
        { text: "asd", value: "datos" },
      ],
      states: [
        {
          name: "Razón Social",
          datos: "fecha",
        },
        {
          name: "NIT",
          datos: "apelliaado",
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
    .where('fecha', "==",this.fecha)
    // .where('password', "==", this.password)
      // if (!firebase.apps.length) {
      //   firebase.initializeApp(this.firebaseConfig);
      // }
      // firebase 
      // .firestore().collection("Caracterizacion").onSnapshot((snapshotChange)=>{
      //   this.Caracterizacion=[];
      //   snapshotChange.forEach((doc)=>{
      //     this.Caracterizacion.push({
      //       departamento:doc.data().departamento,
      //       fecha:doc.data().fecha,
      //       direccion:doc.data().direccion,
      //     })
      //   })
      // })
    

      
      //  db
      //   .collection("Caracterizacion")
      //   .get()
      //   .then((querySnapshot) => {
      //      me.Caracterizacion=[];
      //     // me.direccion="";
      //     querySnapshot.forEach((doc) => {
      //       me.Caracterizacion.push(doc.data().Caracterizacion);
      //       // me.direccion.push(doc.data().direccion);
      //       // console.log(`${doc.id} => ${doc.data()}`);
      //       console.log(me.Caracterizacion,'s')
      //     });
      //   });
      //  await db.collection('articulo')
      //   .get()
      //   .then((querySnapshot)=>{
      //     me.datos=[];
      //     me.stock=[];
      //     querySnapshot.forEach((doc)=>{
      //       me.datos.push(doc.data().datos);
      //       me.stock.push(doc.data().stock);
      //     })
      //   })
      //   let ctx = document.getElementById('myChart');
      //  /* eslint-disable no-unused-vars */
      //   const myChart = new Chart(ctx, {
      //       type: 'pie',
      //       data: {
      //           labels: me.datos,
      //           datasets: [{
      //               label: 'Articulos',
      //               data: me.stock,
      //               backgroundColor: [
      //                   'rgba(255, 99, 132, 0.2)',
      //                   'rgba(54, 162, 235, 0.2)',
      //                   'rgba(255, 206, 86, 0.2)',
      //                   'rgba(75, 192, 192, 0.2)',
      //                   'rgba(25, 80, 130, 0.2)',
      //                   'rgba(25, 255, 12, 0.2)',
      //               ],
      //               borderColor: [
      //                   'rgba(255, 99, 132, 1)',
      //                   'rgba(54, 162, 235, 1)',
      //                   'rgba(255, 206, 86, 1)',
      //                   'rgba(75, 192, 192, 1)',
      //                   'rgba(25, 80, 130, 0.2)',
      //                   'rgba(25, 255, 12, 0.2)',
      //               ],
      //               borderWidth: 3
      //           }]
      //       },
      //      options: {
      //        elements: {
      //   line: {
      //     borderWidth: 3
      //   }
      // }}
      //     scales: {
      //         yAxes: [{
      //             ticks: {
      //                 beginAtZero: true
      //             }
      //         }]
      //     }
      // }
      // });
    },
  },
};
</script>

