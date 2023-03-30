<template id="login-page">
  <v-app fluid>
    <div class="signin-overlay pa-5">
      <v-card class="signin-card">
        <v-toolbar dense dark color="primary">
          <v-card-title>Control de Acceso</v-card-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            v-model="userName"
            label="Usuario"
            outlined
            id="userName"
          ></v-text-field>
          <v-text-field
            outlined
            v-model="password"
            label="Contraseña"
            id="password"
            type="password">
          </v-text-field>
          <v-btn block outlined color="success" @click="Login">Ingresar</v-btn>
          <br>
          <v-btn block outlined color="primary" @click="Register">Registrate Aqui</v-btn>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>
<script>
import auth from '../logic/auth.js'
export default {
  data () {
    return {
      userName: '',
      password: '',
      error: false
    }
  },
  methods: {
    async Login () {
      try {
        await auth.iniciarSesion(this.userName, this.password)
        const user = {
          usuario: this.userName
          // password: this.password
        }
        auth.setUserLogged(JSON.stringify(user))
        this.$router.push('/busqueda')
      } catch (error) {
        console.log(error)
        alert('Usuario y/o Contraseña Incorrectos')
        this.error = true
      }
    },
    Register () {
      this.$router.push('/register')
    }
  }
}
</script>
