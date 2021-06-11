import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../Db';

Vue.use(Vuex)

export default new Vuex.Store({

    actions: {
        addUsuario(context, payload) {
            //context.commit('addPersona', payload)
            console.log(context)
                //  return new promise((resolve,reject)=>{
            db.collection("proceso de caracterizacion")
                .add(
                    payload
                )
                .then((res) => {
                    console.log(res);
                }).catch((error) => console.log(error));
            //     })

        }
    }
})