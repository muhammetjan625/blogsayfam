// auth.js
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, updatePassword } from "firebase/auth";
import { app } from "./firebase.js"; // senin firebase config dosyan

const auth = getAuth(app);

// Login
export async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

// Logout
export function logout() {
  signOut(auth);
}

// Kullanıcı durumunu kontrol et
export function requireAuthOrRedirect() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        location.href = "login.html";
      } else {
        resolve(user);
      }
    });
  });
}

// Şifre değiştir
export async function changePassword(newPw) {
  const user = auth.currentUser;
  if (user) {
    await updatePassword(user, newPw);
  }
}
