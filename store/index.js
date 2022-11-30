export const state = () => ({
  token: '',
  loading: false,
  user: null 
})

export const mutations = {
  token(state, payload) {
    state.token = payload.token
  },
  loading(state, payload) {
    state.loading = payload.loading
  },
  user(state, payload) {
    state.user = payload.user
  },
}
