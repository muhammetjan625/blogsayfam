// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-cOHc81SNMX_u0CmpLtnKRS4sNedlN9E",
  authDomain: "blog-sayfa.firebaseapp.com",
  projectId: "blog-sayfa",
  storageBucket: "blog-sayfa.firebasestorage.app",
  messagingSenderId: "610980157440",
  appId: "1:610980157440:web:2409920a6b9ecc28efa0e5",
  measurementId: "G-EF2PN951C7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
