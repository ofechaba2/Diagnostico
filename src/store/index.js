import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../Db';

Vue.use(Vuex)

export default new Vuex.Store({

    actions: {
        addCaracterizacion(context, payload) {
            //context.commit('addPersona', payload)
            console.log(context)
                //  return new promise((resolve,reject)=>{
            db.collection("Caracterizacion")
                .add(
                    payload
                )
                .then((res) => {
                    console.log(res);
                }).catch((error) => console.log(error));
            //     })

        },
        addDiagnostico(context, payload) {

            console.log(context)

            db.collection("Diagnostico")
                .add(
                    payload
                )
                .then((res) => {
                    console.log(res);
                }).catch((error) => console.log(error));


        },
        addUsuario(context, payload) {

            console.log(context)

            db.collection("Usuario")
                .add(
                    payload
                )
                .then((res) => {
                    console.log(res);
                }).catch((error) => console.log(error));


        },
        async inicioSesion() {
            await db.collection("Usuario")
                .where('email', "==", this.email)
                .where('password', "==", this.password)
                .where('estado', "==", true).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log(doc.data.length + " cadena");
                        this.estadologin = doc.data.length;
                        if (doc.data.length >= 1) {
                            this.$store.dispatch("addUsuario", doc.data());
                            this.$router.push("/");
                        } else {
                            // Swal.fire("¡Atención!", "El usuario esta inactivo consulte con el Administrador del sistema", "info");
                        }
                    })
                })
        }
    }
})