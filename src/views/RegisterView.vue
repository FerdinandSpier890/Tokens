<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="userName"
            outlined
            label="Usuario"
            required
          ></v-text-field>
        </v-col>
        <br>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            label="Contraseña"
            outlined
            required
            type="password"
          ></v-text-field>
        </v-col>
        <br>
        <v-col cols="12" md="4">
          <v-btn depressed block outlined @click="Guardar" color="success">
            Registrar Usuario
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    userName: '',
    password: ''
  }),
  methods: {
    Guardar () {
      fetch('https://localhost:7156/api/Account/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: this.userName,
          password: this.password
        })
      })
        .then((res) => res.text())
        .then((data) => {
          this.$router.push('/')
          alert('Usuario Registrado: ' + data)
        })
    }
  }
}
</script>
