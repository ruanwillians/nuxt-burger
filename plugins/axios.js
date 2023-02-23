
export default function ({ $axios, redirect }) {

  $axios.interceptors.response.use((response) => {
    return response
  }, (error) => {
    const status = error.response ? error.response.status : null
    if (status === 401) {
      // Redirecione para a página de login se o token de autenticação for inválido ou expirar
      redirect('/login')
    }
    return Promise.reject(error)
  })
}
