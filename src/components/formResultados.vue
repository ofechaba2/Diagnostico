<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-default-footer
    class="elevation-1"
  ></v-data-table>
</template>


<script>
import { db } from "../Db";
  export default {
    data () {

      db.collection("articulo").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
      return {
        headers: [
          {
            text: 'PROCESO',
            align: 'start',
            value: 'articulo.datos',
          },
          { text: 'PUNTAJE',align: 'start', value: 'puntaje' },
          { text: 'ESTADO', value: 'estado' },
        ],
        desserts: [
          {
            name: 'Estrategia',
            puntaje: 159,
            estado: "doc.id",
         
          },
          {
            name: 'Capital Humano',
            puntaje: 237,
            estado: 9.0,
        
          },
          {
            name: 'Ventas',
            puntaje: 262,
            estado: 16.0,
          
          },
          {
            name: 'Compras',
            puntaje: 305,
            estado: 3.7,         
          },
          {
            name: 'Finanzas',
            puntaje: 356,
            estado: 16.0,         
          },
          {
            name: 'Logística',
            puntaje: 375,
            estado: 0.0,
          },
          {
            name: 'Tecnología',
            puntaje: 392,
            estado: 0.2,
          },
          {
            name: 'Control y Medicíon',
            puntaje: 408,
            estado: 3.2,
          },
          {
            name: 'Comunicacíon',
            puntaje: 452,
            estado: 25.0,
          },
          {
            name: 'Produccíon',
            puntaje: 518,
            estado: 26.0,
          },
           {
            name: 'Total General',
            puntaje: 518,
            estado: 26.0,
          },
        ],
      }
    },
  }
</script>