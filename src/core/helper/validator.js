export const checkConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword || password === confirmPassword) {
    return Promise.resolve();
  }
  return Promise.reject(new Error('Mật khẩu không khớp'));
}