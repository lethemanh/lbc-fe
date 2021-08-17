export const user = {
  state: {
    userBalance: 0
  },
  reducers: {
    setUserBalance(state, payload) {
      return {
        ...state,
        userBalance: payload
      }
    }
  }
}