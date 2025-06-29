// src/lib/authService.js
export async function login({ email, password }) {
  return new Promise((res) => {
    console.log("LOGIN", { email, password });
    setTimeout(() => res({ ok: true }), 600);
  });
}

export async function signup({ name, email, password }) {
  return new Promise((res) => {
    console.log("SIGN‑UP", { name, email, password });
    setTimeout(() => res({ ok: true }), 600);
  });
}
