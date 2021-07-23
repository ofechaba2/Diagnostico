import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDU2OWE5YjEyNDdjOTQxMjBiYjRhYjciLCJpYXQiOjE2MjA0NDc0NzksImV4cCI6MTYyMDQ2MTg3OX0.vy85qU5yEWcvgMHvrSUwaR1I7BU8e4_HWNPvOz8RKAA",
        usuario: {
            estado: 1,
            _id: "60569a9b1247c94120bb4ab7",
            nombre: "andres",
            email: "admin@prueba.com",
            password: "$2a$10$MiRtgvXLxuR/ifB57wJvGu73Ov4uxdSMW2WOSoO6g0ZHEvuERkpgG",
            rol: "ADMIN_ROL",
            createdAt: "2021-03-21T01:00:11.056Z",
            __v: 0
        }
    },
    mutations: {
        setToken(firebaseConfig, data) {

            firebaseConfig.user = data.user,
                firebaseConfig.usuario = data.usuario
            console.log(data)



        }
    },
    actions: {
        setToken(context, data) {
            context.commit('setToken', data)
        }
    },
    modules: {}
})