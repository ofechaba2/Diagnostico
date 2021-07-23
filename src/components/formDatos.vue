<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-default-footer
    class="elevation-1"
  >
    
  </v-data-table>
</template>


<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
           
          },
          {
            name: 'Eclair',
            calories: 262,
            
          },
          {
            name: 'Cupcake',
            calories: 305,
           
          },
          
        ],
      }
    }
  }
</script>