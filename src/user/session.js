export function setSession(payload) {
  return sessionStorage.setItem("user", payload);
}

export function setToken(payload) {
  return sessionStorage.setItem("token", payload);
}

export function getToken() {
  return sessionStorage.getItem("token");
}

export function clearSession() {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("token");
}
