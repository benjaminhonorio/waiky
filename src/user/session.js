export function setSession(payload) {
  sessionStorage.setItem("user", payload);
}

export function setToken(payload) {
  sessionStorage.setItem("token", payload);
}

export function getToken() {
  sessionStorage.getItem("token");
}

export function clearSession() {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("token");
}
