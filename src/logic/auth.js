import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  setUserLogged (userLogged) {
    Cookies.set('userLogged', userLogged)
  },
  getUserLogged () {
    return Cookies.get('token')
  },
  iniciarSesion (userName, password) {
    const user = { userName, password }
    return axios.post('https://localhost:7156/api/Account/Login', user).then(response => {
      Cookies.set('token', response.data.token)
    })
  },
  deleteUserLogged () {
    Cookies.remove('token')
    Cookies.remove('userLogged')
  }
}
