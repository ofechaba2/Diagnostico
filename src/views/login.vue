<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="text-center display-2 teal--text text--primary"
                      >
                        Iniciar sesión
                      </h1>
                      <div class="text-center mt-4"></div>
                      <h4 class="text-center mt-4">
                        Asegurate de tu correo electrónico para ingresar
                      </h4>
                      <v-form>
                        <v-text-field
                          type="email"
                          v-model="email"
                          label="Correo Electronico"
                          name="Email"
                          color="teal accent-3"
                        />

                        <v-text-field
                          type="password"
                          v-model="password"
                          label="Password"
                          name="password"
                          color="teal accent-3"
                        />
                      </v-form>
                      <h3 class="text-center mt-4">Olvidaste tu contraseña?</h3>
                    </v-card-text>
                    <div class="text-center mt-3">
                      <v-btn rounded color="primary" dark @click="ingresar"
                        >Iniciar Sesión</v-btn
                      >
                      <br />
                      <br />
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" class="pink darken-4">
                    <v-card-text class="white--text mt-12">
                      <br /><br />
                      <h1 class="text-center display-1">Hola, ¡Bienvenido!</h1>
                      <br />
                      <hr />
                      <h4 class="text-center">
                        Si aun no tienes una cuenta con nosotros, ingresa tus
                        datos y comienza a trabajar!
                      </h4>
                      <br />
                    </v-card-text>
                    <div class="text-center">
                      <v-btn color="success" rounded @click="step++"
                        >Incribirse</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row class="fill-height">
                  <v-col cols="12" md="4" class="pink darken-4">
                    <v-card-text class="white--text mt-12">
                      <br />
                      <br />
                      <h1 class="text-center display-1">
                        ¡Bienvenido de nuevo!
                      </h1>
                      <br />
                      <hr />
                      <h4 class="text-center">
                        Si ya tiene una cuenta con nosotros, inicia sesión con
                        tu Usuario y Contraseña
                      </h4>
                      <br />
                    </v-card-text>
                    <div class="text-center">
                      <v-btn color="success" rounded @click="step--"
                        >Iniciar Sesión</v-btn
                      >
                    </div>
                  </v-col>

                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="text-center display-2 teal--text text--primary"
                      >
                        Crear una cuenta
                      </h1>

                      <h4 class="text-center mt-4">
                        Asegurate de tu correo electrónico para poder
                        registrarte
                      </h4>
                      <v-form>
                        <br />
                        <v-row>
                          <v-col cols="6" md="12">
                            <v-text-field
                              v-model="emailS"
                              label="Correo Electronico (Usuario)"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6" md="6">
                            <v-text-field
                              type="password"
                              v-model="passwordS"
                              label="Contraseña"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6" md="6">
                            <v-text-field
                              type="password"
                              v-model="passwordConf"
                              label="Confirma la Contraseña"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="nombres"
                              label="Nombres"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="apellidos"
                              label="Apellidos"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row>
                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="nombreEmpresa"
                              label="Nombre de la Empresa"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="cargoEmpresa"
                              label="Cargo que desempeña en la Empresa"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="telefono"
                              label="Telefono"
                              required
                            ></v-text-field>
                          </v-col>

                          <v-col class="flex" cols="6" sm="6">
                            <v-select
                              :items="sectorEconomiaSel"
                              v-model="tipoIndustria"
                              label="Tipo de Insdustria"
                              required
                            ></v-select>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-card-text>
                    <div class="text-center mt-n5">
                      <v-btn rounded color="primary" dark @click="nuevoUser"
                        >INSCRIBIRSE</v-btn
                      >
                      <br />
                      <br />
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>


<script>
import Swal from 'sweetalert2';
import firebase from 'firebase';
export default {
  data: () => ({
    step: 1,

      email: "",
      password: "",
      emailS: "",
      passwordS: "",
      error:"",
      passwordConf:"",
      nombres:"",
      apellidos:"",
      nombreEmpresa:"",
      cargoEmpresa:"",
      telefono:"",
      tipoIndustria:"",
      

      
    
    sectorEconomiaSel: ["Agropecuario", "Comercio", "Industrial", "Servicio"],
    errors: null,

  }),
  props: {
    source: String,
  },
  computed:{
  
  },
  methods: {
     
      
    nuevoUser() {
      if (this.passwordS != this.passwordConf) {

        Swal.fire(
              "¡Error!",
              "Las contraseñas no coinsiden, por favor verifique e intente nuevamente.",
              "warning")
      }else
       if( 
        this.nombres != "" && 
        this.emailS !="" && 
        this.passwordS !="" &&
        this.apellidos !="" &&
        this.nombreEmpresa !="" &&
        this.cargoEmpresa !="" &&
        this.telefono !="" &&
        this.tipoIndustria !=""
        ) {
        firebase.auth().createUserWithEmailAndPassword(this.emailS, this.passwordS)
        .then(user => {
          this.nombres='',
          this.emailS='',
          this.passwordS='',
          this.passwordConf='',
          this.apellidos='',
          this.nombreEmpresa='',
          this.cargoEmpresa='',
          this.telefono='', 
          this.tipoIndustria='',
          console.log(user);
          
         firebase.auth().currentUser.sendEmailVerification();
         
           Swal.fire(
              "¡Felicitaciones!",
              "La cuenta de a creado satisfactoriamente, Se a enviado un un correo de verificacion",
              "success"
            );

        }).catch(
          Swal.fire(
              "¡Correo Invalido!",
              "Este correo ya esta en uso, por favor verifique e intentelo nuevamente.",
              "info")
        )                    
      }else{
         Swal.fire(
              "¡!",
              "Todos los campos son requeridos, Verifique que todos los campos esten completos.",
              "warning")
      }
    },
   
    
  async ingresar() {
      if ( this.email && this.password ) {
      await firebase.auth().signInWithEmailAndPassword (this.email, this.password)
        .then(user => {
        this.$router.push("./caracterizacion");          
          console.log(user)
          Swal.fire(
              "¡Felicitaciones!",
              "A iniciado sesion satisfactoriamente",
              "success");
        }).catch (
         Swal.fire(
              "¡Error!",
              "La cuenta o la contraseña son invalidas, por favor verifique e intente nuevamente",
              "error")
        )                    
      }else{
        Swal.fire(
              "¡VERIFIQUE!",
              "Verifique que los campos esten completos",
              "info"
            );
      }
    }
//     verificar(){
//       firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     var uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
//   //     firebase.auth().currentUser.sendEmailVerification()
//   // .then(() => {
//   //   // Email verification sent!
//   //   // ...
//   // });
//     // }
    }
  }

</script>

