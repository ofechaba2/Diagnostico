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
import "firebase/firestore";
import { db } from "../Db";
export default {
  data() {
    return {
      datos: [],
      stock: [],
      Caracterizacion:[],

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
    };
  },

  mounted() {
    this.selectArticulo();
  },
  methods: {
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

