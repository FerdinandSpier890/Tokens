<template>
  <div>
    <navigation/>
    <h1>Home</h1>
    <v-data-table
      :headers="headers"
      :items="usuarios"
      class="elevation-2"
    ></v-data-table>
  </div>
</template>
<script>
import auth from '../logic/auth.js'
export default {
  data () {
    return {
      headers: [
        { text: 'Id Usuario', value: 'id' },
        { text: 'Nombre de Usuario', value: 'userName' },
        { text: 'Password Hash', value: 'passwordHash' },
        { text: 'Password Salt', value: 'passwordSalt' }
      ],
      usuarios: [],
      search: '',
      pagination: {},
      selected: []
    }
  },
  computed: {
    userLogged () {
      return auth.getUserLogged()
    }
  },
  created () {
    this.mostrarUsuarios()
  },
  methods: {
    mostrarUsuarios () {
      fetch('https://localhost:7156/api/Users')
        .then((response) => response.json())
        .then((data) => (this.usuarios = data))
    }
  }
}
</script>
