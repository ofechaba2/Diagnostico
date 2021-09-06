<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo2.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Bienvenido 
        </h1>

        <p class="subheading font-weight-regular">
          Le damos la bienvenida a nuestro sistema de caracterizacion 2wayv, donde podra saber el estado de su empresa
          
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Opciones =)
        </h2>
        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'opcion 1',
          href: '',
        },
        {
          text: 'opcion 2',
          href: '',
        },
        {
          text: 'opcion 3',
          href: '',
        },
      ],      
    }),
  }
</script>
