<template>
  <div class="login">
    <h1 class="title">Login</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#usuario">Usuario:</label>
      <input
        v-model="usuario"
        class="form-input"
        type="text"
        id="usuario"
        required
        placeholder="Usuario"
      >
      <label class="form-label" for="#password">Contraseña:</label>
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Contraseña"
      >
      <p v-if="error" class="error">Has Introducido mal el email o la contraseña.</p>
      <input class="form-submit" type="submit" value="Login">
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    usuario: '',
    password: '',
    error: false
  }),
  methods: {
    login () {
      console.log(this.usuario)
      console.log(this.password)
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1bb189;
  border: none;
  color: hsl(0, 0%, 100%);
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
</style>
