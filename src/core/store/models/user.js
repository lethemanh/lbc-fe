export const user = {
  state: {
    userBalance: 0,
    userName: "",
    userId: ""
  },
  reducers: {
    setUserBalance(state, payload) {
      return {
        ...state,
        userBalance: payload
      }
    },
    setUserName(state, payload) {
      return {
        ...state,
        userName: payload
      }
    },
    setUserId(state, payload) {
      return {
        ...state,
        userId: payload
      }
    }
  }
}