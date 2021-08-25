
<template>
  <v-layout align-start>
    <v-flex>
      <template>
        <v-form ref="form">
          <v-container>
            <h1 class="text-center" v-if="this.valor == 'Agropecuario'">
              DIAGNOSTICO EMPRESARIAL-SECTOR AGROPECUARIO
            </h1>
            <h1 class="text-center" v-if="this.valor == 'Comercio'">
              DIAGNOSTICO EMPRESARIAL-SECTOR COMERCIO
            </h1>
            <h1 class="text-center" v-if="this.valor == 'Industrial'">
              DIAGNOSTICO EMPRESARIAL-SECTOR INDUSTRIAL
            </h1>
            <h1 class="text-center" v-if="this.valor == 'Servicio'">
              DIAGNOSTICO EMPRESARIAL-SECTOR SERVICIO
            </h1>
            <v-divider class="mx-5" inset vertical></v-divider>
            <v-row>
              <template>
                <v-col cols="12" sm="7">
                  <formDatos />
                </v-col>
                <v-col cols="12" sm="5">
                  <graficoPie />
                </v-col>
                <v-col cols="2" sm="4">
                  <formResultados />
                </v-col>
                <v-col cols="12" sm="8">
                  <graficoRadar />
                </v-col>
              </template>
            </v-row>
          </v-container>
        </v-form>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'
import graficoRadar from "../components/graficoRadar.vue";
import graficoPie from "../components/graficoPie.vue";
import formDatos from "../components/formDatos.vue";
import formResultados from "../components/formResultados.vue";
// valor= global.GsectorEconomia;
export default {
  valor: global.GsectorEconomia,
  name: "Home",
  
  
  components: {
    graficoRadar,
    graficoPie,
    formDatos,
    formResultados,
  },
  
};

</script>