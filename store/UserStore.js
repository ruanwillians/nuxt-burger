export const stateUser = () => ({
  user: '',
})

export const stateError = () => ({
  error: '',
})

export const stateAdmin = () => ({
  admin: false,
})



export const getters = {
  user(state){
    return state.user
  },

}

export const actions = {
  async login (context, user) {
    context.commit('RemoveError', '')
    context.commit('RemoveAdmin', false)
    this.$axios
        .post("/login", {
          email: user.email,
          password: user.password
        })
        .then((res) => {
          context.commit('SetUser', res.data)
          if(res.data.admin === true){
            context.commit('SetAdmin', true)
            this.$router.push('/dashboard')
          } else {
           this.$router.push('/')
          }
        })
        .catch((err)=> {
          if(err.message === "Request failed with status code 401"){
             context.commit('SetError', "Email ou senha Inválida")
          }

          if(err.message === "Network Error"){
            context.commit('SetError', "Erro, tente novamente mais tarde")
          }
        })
  },

  async register(context, user){
    context.commit('RemoveError', '')
    context.commit('RemoveAdmin')
    this.$axios
        .post("/users", {
          name: user.name,
          email: user.email,
          password: user.password,
          admin: false
        })
        .then((res) => {
          this.$router.push('/login')

        })
        .catch((err)=> {
          if(err.message === "Request failed with status code 422"){
            context.commit('SetError', "Email já cadastrado faça login")
          }

          if(err.message === "Network Error"){
            context.commit('SetError', "Erro, tente novamente mais tarde")
          }

        })
  },

  logout(context){
    context.commit('RemoveError', '')
    context.commit('RemoveUser')
    context.commit('RemoveAdmin')
    this.$router.push('/login')
  },

  cleanError(context){
    context.commit('RemoveError', '')
  },

  cleanError(context){
    context.commit('RemoveAdmin')
  },

}

export const mutations = {
    SetUser(state, user) {
      state.user = user
    },
    SetError(state, err){
      state.error= err
    },

    SetAdmin(state, value){
      state.admin= value
    },

    RemoveUser(state){
      state.user = ''
      state.token= ''
      state.error = ''
    },

    RemoveError(state){
      state.error =  ''
    },

    RemoveAdmin(state){
      state.admin = false
    }

}


