//@ts-check

/** Return user auth from local storage value */
export const getStoredUserAuth = () => {
  const auth = window.localStorage.getItem('token');
  if (auth) {
    return auth
  }
  return "No auth token";
};
