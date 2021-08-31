<template>
  <div >
    <canvas id="myChart1"></canvas>
</div>
</template>
<script>
import Chart from 'chart.js'
import "firebase/firestore";
import { db } from "../../Db";

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
    async selectArticulo() {
      let me = this;
       await db.collection('articulo')
        .get()
        .then((querySnapshot)=>{
          me.datos=[];
          me.nombre=[];
          querySnapshot.forEach((doc)=>{
            me.datos.push(doc.data().datos); 
            me.nombre.push(doc.data().nombre);           
          })
        }) 
      let ctx = document.getElementById('myChart1');
     /* eslint-disable no-unused-vars */
      const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
              labels: me.nombre,
              datasets: [{
                  label: 'Articulos',
                  data: me.datos,
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
      });
    }
  },   
}
</script>

<style>
.ex2 {
  margin: 100px;
}
</style>