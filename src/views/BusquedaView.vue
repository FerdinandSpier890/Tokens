<template>
  <div>
    <h1>Home</h1>
    <p v-if="userLogged">Usuario Logueado: {{ userLogged }}</p>
    <v-col cols="12" md="4">
      <v-text-field
      v-model="id"
      label="Escribe el Id del Usuario"
      outlined
      required></v-text-field>
    </v-col>
    <br />
    <v-col cols="12" md="4">
      <v-btn block outlined depressed @click="Buscar" color="success"> Buscar </v-btn>
      <br>
      <v-btn  block outlined depressed @click="cerrarSesion" color="error">Cerrar Sesion</v-btn>
    </v-col>
    <p id="infoUser"></p>
  </div>
</template>
<script>
import auth from '../logic/auth.js'
import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  data () {
    return {
      usuarios: [],
      idUsuario: 0,
      id: 0,
      text: '',
      obj: ''
    }
  },
  methods: {
    Buscar () {
      const me = this
      this.idUsuario = this.id
      axios
        .get('https://localhost:7156/api/Users/' + this.idUsuario, {
          headers: { Authorization: 'Bearer ' + Cookies.get('token') }
        })
        .then(function (response) {
          const iduser = response.data.id + ' } - { '
          const nombreUsuario = response.data.userName + ' } - { '
          const pswHas = response.data.passwordHash + ' } - { '
          const pswSalt = response.data.passwordSalt + ' } '

          const info =
            '{ Id Usuario: ' +
            iduser +
            'Usuario: ' +
            nombreUsuario +
            'Password Hash: ' +
            pswHas +
            'Password Salt: ' +
            pswSalt
          me.usuarios.push({
            value: info
          })
          const myJSON = JSON.stringify(info)
          localStorage.setItem('testJSON', myJSON)
          const text = localStorage.getItem('testJSON')
          const obj = JSON.parse(text)
          document.getElementById('infoUser').innerHTML = obj
        })
        .catch(function (error) {
          const myJSON = error
          localStorage.setItem('testJSON', myJSON)
          const text = localStorage.getItem('testJSON')
          const obj = text + ': No Tienes Token para Hacer Esta Acción, Vueve a Iniciar Sesión'
          document.getElementById('infoUser').innerHTML = obj
        })
    },
    cerrarSesion () {
      auth.deleteUserLogged()
      location.reload()
      this.$router.go(0)
    }
  },
  computed: {
    userLogged () {
      return auth.getUserLogged()
    }
  }
}
</script>
