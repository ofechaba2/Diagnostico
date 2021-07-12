<template>

  <v-data-table 
  
    :headers="headers"
    :items="desserts"
    
    hide-default-footer
    class="elevation-1"
    @click="guardar"
  ></v-data-table>
</template>
<script>


export default {
  
  data: () => ({

      valor: global.GsectorEconomia,
      sector:global.GsectorEconomia,
      razon: global.Grazonsocial,
      nit: global.Gnit,
      departamento:global.Gdepartamento,
      forma: global.Gformajuridica,
      
    valid: false,
    
  }),
  methods: {
    guardar() {
          console.log(this.valor),
          console.log(this.sector),
          console.log(this.nit),
          console.log(this.departamento),
          console.log(this.forma),
          console.log(this.razon)
    },
  },
};
</script>
<script>
  export default {
    data () {
      valor: global.GsectorEconomia;
      sector:global.GsectorEconomia;
      razon: global.Grazonsocial;
      nit: global.Gnit;
      departamento:global.Gdepartamento;
      forma: global.Gformajuridica;
      
      return {
             
        headers: [
          {
            
            align: 'start',
            value: 'name',
          },
          
          { value: 'calories' },
        ],
        desserts: [
          {
            name: 'Razon Social',
            calories: this.razon,
          },
          {
            name: 'NIT',
            calories: this.nit,
          },
          {
            name: 'Forma Juridica',
            calories: this.forma,
          },
          {
            name: 'Departamento',
            calories: this.departamento,
          },
          
          
        ],
      
      }
      
    },
    methods: {
    guardar() {
          console.log(this.valor),
          console.log(this.sector),
          console.log(this.nit),
          console.log(this.departamento),
          console.log(this.forma),
          console.log(this.razon)
    },
    // computed:{

    //   }
  }
}
</script>