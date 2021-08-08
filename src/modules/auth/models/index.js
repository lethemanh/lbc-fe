export const auth = {
  state: {
    token: ''
  },
  reducers: {
    setToken(state, payload) {
      return {
        ...state,
        token: payload
      }
    }
  }
}
