<template>
  <div>
    <!-- <app-grafica :chartdata="chartdata" :options="options"></app-grafica> -->
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
// import axios from "axios";
import Chart from 'chart.js'
// import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../Db";

export default {
  data() {
    return { 
      datos:[],
      stock:[],
      
    };
  },
  
   
mounted() {
  this.selectArticulo()
},

  methods: {
    //se debe dejar el async y el await para axios para que la grafica salga de una vez con los datos
    async selectArticulo() {
      let me = this;
       await db.collection('articulo')
        .get()
        .then((querySnapshot)=>{
          me.datos=[];
          me.stock=[];
          querySnapshot.forEach((doc)=>{
            me.datos.push(doc.data().datos); 
            me.stock.push(doc.data().stock);           
          })
        }) 
      let ctx = document.getElementById('myChart');
     /* eslint-disable no-unused-vars */
      const myChart = new Chart(ctx, {
          type: 'radar',
          data: {
              labels: me.datos,
              datasets: [{
                  label: 'Articulos',
                  data: me.stock,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(25, 80, 130, 0.2)',
                      'rgba(25, 255, 12, 0.2)',                    
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(25, 80, 130, 0.2)',
                      'rgba(25, 255, 12, 0.2)',
                  ],
                  borderWidth: 3
              }]
          },
         options: {
           elements: {
      line: {
        borderWidth: 3
      }
    }}
          //     scales: {
          //         yAxes: [{
          //             ticks: {
          //                 beginAtZero: true
          //             }
          //         }]
          //     }
          // }
      });
    }
  },   
   /* listar() {
      let me = this;
      let header = { headers: { "x-token": this.$store.state.token } };
      axios
        .get("articulo", header)
        .then(function (response) {
          me.encabezados = response.data.articulo;
          //console.log(me.encabezados)
          for (var i = 0; i < 2; i++) {
              me.chartdata.labels.push(me.encabezados[i].nombre)
              me.stock.push(me.encabezados[i].stock);
          }
         
        })
        .catch(function (error) {
          console.log(error);
        });
        
  }, */
 
       /* this.selectArticulo();
       console.log(this.datos)
       console.log(this.stock)
       console.log(this.chartdata); */
      
  /*      let me = this;
      let categoriaArray = [];
      let header = { headers: { "x-token": this.$store.state.token } };
       axios
        .get("articulo", header)
        .then(function (response) {
          categoriaArray = response.data.articulo;
          categoriaArray.map(function (x) {
            me.datos.push(x.nombre);
            me.stock.push(x.stock)
          });

          me.chartdata={
                    labels: me.datos,
                    datasets: [
                    {
                    label: "Articulos",
                    backgroundColor: "#f87979",
                    data: me.stock
                },
                ],
            }
        })
        .catch(function (error) {
          console.log(error);
        }); */
}
</script>

<style>
.ex2 {
  margin: 100px;
}
</style>