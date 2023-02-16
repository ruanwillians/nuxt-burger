import { stateUser } from "~/store/UserStore"

export default function ({ $axios }) {
  $axios.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + stateUser.user.token
    return config
  }, error => {
    // Trate erros de solicitação
    return Promise.reject(error)
  })

  $axios.onError(error => {
    // Adicione o código que você deseja executar em caso de erro de rede
  })
}
