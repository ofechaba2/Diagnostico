<template>
  <v-layout align-start>
    <v-flex>
      <template>
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-container>
            <v-toolbar-title>Proyectos Gráficos</v-toolbar-title>
            <v-divider class="mx-5" inset vertical></v-divider>
            <v-row>
              <template>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <!-- <app-grafica :chartdata="chartdata" :options="options"></app-grafica> -->
                  <canvas id="myChart1" width="400px" height= "200px"></canvas>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <!-- <app-grafica :chartdata="chartdata" :options="options"></app-grafica> -->
                  <canvas id="myChart" width="400px" height= "200px"></canvas>
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

import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../Db";
import Chart from 'chart.js'
 
export default {
  data() {
     return {

      datos:[],
      areas:[],
      cantAreas:[],
      fechas: [],
      fechasYear: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
      cantPro: [],
      year2015: 0,
      year2016: 0,
      year2017: 0,
      year2018: 0,
      year2019: 0,
      year2020: 0,
      year2021: 0,
      year2022: 0,
      year2023: 0,
      year2024: 0,
      year2025: 0,
      disabled: null,
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo registro" : "Editar registro";
    },
     logueado(){
        return this.$store.state.usuario;
    },
   esAdministrador(){
     
      return this.$store.state.usuario && this.$store.state.usuario.rol == 'ADMIN_ROL';
    },
    esEditor(){      
      return this.$store.state.usuario && this.$store.state.usuario.rol == 'EDITOR_ROL';
    },
    esVisitante(){
      return this.$store.state.usuario && this.$store.state.usuario.rol == 'VISITANTE_ROL';
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  mounted() {
    this.consultaFechas();
    this.consultaAreas();
    // this.contarFechas();
  },
  
  methods: {
   grafico() {
    let me = this;
      let ctx = document.getElementById('myChart');
     /* eslint-disable no-unused-vars */
      const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
              labels: me.areas,
              datasets: [{
                  title: 'areas',
                  label: 'Proyectos',
                  data: me.cantPro,
                  backgroundColor: [
                      'rgba(255, 0, 0, 0.4)',
                      'rgba(26, 26, 255, 0.4)',
                      'rgba(255, 117, 26, 0.4)',
                      'rgba(0, 179, 0, 0.4)',
                      'rgba(230, 0, 230, 0.4)',
                      'rgba(179, 60, 0, 0.4)',

                      'rgba(230, 0, 92, 0.4)',
                      'rgba(230, 230, 0, 0.4)',
                      'rgba(102, 102, 0, 0.4)',
                      'rgba(0, 204, 204, 0.4)',
                     
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(25, 80, 130, 0.2)',
                      'rgba(179, 60, 0, 0.2)',

                      'rgba(230, 0, 92, 0.2)',
                      'rgba(230, 230, 0, 0.2)',
                      'rgba(102, 102, 0, 0.2)',
                      'rgba(0, 204, 204, 0.2)',
                  ],
                  borderWidth: 2
              }]
          },
         options: {
            // title:{
            //   display: true,
            //   text:'Cantidad de proyectos por área',
            //   fontSize: 15,
            //   padding: 10,
            //   fontColor: '#000000',
            // },
            legend: {
              position: 'bottom',
              labels: {
                padding: 20,
                boxWidth: 15,
                fontFamily: 'system-ui',
                fontColor: 'black',
              }
            },
          }
      });
  },

  grafico1() {
    let me = this;
    me.disabled = 0;
    me.contarFechas();
    me.grafico();

      let ctx = document.getElementById('myChart1');
     /* eslint-disable no-unused-vars */
      const myChart1 = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: me.fechasYear,
              datasets: [{
                  label: 'Cantidad de proyectos por vigencia',
                  data: me.cantPro,
                  backgroundColor: [
                      'rgba(255, 0, 0, 0.4)',
                      'rgba(26, 26, 255, 0.4)',
                      'rgba(255, 117, 26, 0.4)',
                      'rgba(0, 179, 0, 0.4)',
                      'rgba(230, 0, 230, 0.4)',
                      'rgba(179, 60, 0, 0.4)',
                     
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(25, 80, 130, 0.2)',
                      'rgba(179, 60, 0, 0.2)',
                  ],
                  borderWidth: 2
              }]
          },
          options: {
            legend: {
              position: 'bottom',
              labels: {
                padding: 20,
                boxWidth: 15,
                fontFamily: 'system-ui',
                fontColor: 'black',
              }
            },
              scales: {
                  yAxes: [{
                      ticks: {
                          precision:0,
                          beginAtZero: true
                      }
                  }]
              },
          }
      });
  },
  listar() {
    let me = this;
    if (!firebase.apps.length) {
          firebase.initializeApp(this.firebaseConfig);
        }
      firebase
          .firestore()
          .collection("artículos")
          .onSnapshot((snapshotChange) => {
            me.datos = [];
            me.stock = [];
            snapshotChange.forEach((doc) => {
              me.datos.push(doc.data().nombre);
              me.stock.push(doc.data().stock);
            })
          })
  },  
  async consultaFechas() {
    if (!firebase.apps.length) {
          firebase.initializeApp(this.firebaseConfig);
    }
    let me = this;
    await db.collection("proyectos")
    .get().then((querySnapshot) => {
      this.fechas = [];
      querySnapshot.forEach((doc) => {
        
        me.fechas.push(doc.data().fechaForm);
            
      }) 
    });

    me.grafico1();  
  },
  async consultaAreas() {
    if (!firebase.apps.length) {
          firebase.initializeApp(this.firebaseConfig);
    }
    let me = this;
    await db.collection("areas")
    .get().then((querySnapshot) => {
      this.areas = [];
      querySnapshot.forEach((doc) => {
        
        me.areas.push(doc.data().nombre);
            
      }) 
    }); 
    me.grafico();
  },
  contarFechas() {
    let me = this;
    let year = null;
      for (let i = 0; i < me.fechas.length; i++) {
        year = me.fechas[i].substring(0, 4)
        console.log(year + " años");
        if (year == 2015) {
          me.year2015 = me.year2015 + 1;
        }
        if (year == 2016) {
          me.year2016 = me.year2016 + 1;
        }
        if (year == 2017) {
          me.year2017 = me.year2017 + 1;
        }
        if (year == 2018) {
          me.year2018 = me.year2018 + 1;
        }
        if (year == 2019) {
          me.year2019 = me.year2019 + 1;
        }
        if (year == 2020) {
          me.year2020 = me.year2020 + 1;
        }
        if (year == 2021) {
          me.year2021 = me.year2021 + 1;
        }
        if (year == 2022) {
          me.year2022 = me.year2022 + 1;
        }
        if (year == 2023) {
          me.year2023 = me.year2023 + 1;
        }
        if (year == 2024) {
          me.year2024 = me.year2024 + 1;
        }
        if (year == 2025) {
          me.year2025 = me.year2025 + 1;
        }       
      }
      me.cantPro =  [ me.year2015, 
                      me.year2016,
                      me.year2017, 
                      me.year2018, 
                      me.year2019, 
                      me.year2020, 
                      me.year2022,
                      me.year2023,
                      me.year2024,
                      me.year2025,
                    ];
      console.log(me.cantPro + "cantPro");  
  },
  contarAreas() {
    let me = this;
      for (let i = 0; i < me.areas.length; i++) {
        me.areas[i]
       
      }
      me.cantPro =  [ me.cantAreas]; 
  },
},
};
</script>
<style>
.ex2 {
  margin:200px;
  width: 800px;
  height: 800px ;
}
</style>

 
