<template>
<v-card color="lighten-5" class="mb-5" height="1500px">
        <br />
        <v-row>
       
         

      
          <v-col  cols="6" md="6">
            <formDatos/>
          </v-col>

          <v-col cols="6" md="6">
            <graficoPie/>
            
          </v-col>
        
          <v-col  cols="4" sm="4">
           <formResultados/> 
          </v-col>
          <v-col  cols="8" sm="8">
            <graficoRadar/>
          </v-col>
        </v-row>
      </v-card>

</template>


<script>
  // import HelloWorld from '../components/HelloWorld'
  import graficoRadar from '../components/graficoRadar.vue'
  // import graficoPie from '../components/graficoPie.vue'
  import formDatos from '../components/formDatos.vue'
  import formResultados from '../components/formResultados.vue'

  export default {
    name: 'Home',

    components: {
      graficoRadar,
      // graficoPie,
      formDatos,
      formResultados,
    },
  }
</script>