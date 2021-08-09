export const user = {
  state: {
    userInfo: {}
  },
  reducers: {
    setUserInfo(state, payload) {
      return {
        ...state,
        userInfo: payload
      };
    }
  }
}
