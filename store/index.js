export const state = () => ({
  token: '',
  loading: false,
})

export const mutations = {
  token(state, payload) {
    state.token = payload.token
  },
  loading(state, payload) {
    state.loading = payload.loading
  },
}
