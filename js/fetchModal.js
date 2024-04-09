import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Registration //
document
  .querySelector(".signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.querySelector(".signup-email").value;
    const password = document.querySelector(".signup-password").value;
    auth
      .createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Registration successful", userCredential);
      })
      .catch((error) => {
        console.error("Registration error", error);
      });
  });

// Login //
document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.querySelector(".login-email").value;
    const password = document.querySelector(".login-password").value;
    auth
      .signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login successful", userCredential);
      })
      .catch((error) => {
        console.error("Login error", error);
      });
  });

// Logout //
document.querySelector(".logout-btn").addEventListener("click", function () {
  signOut(auth)
    .then(() => {
      console.log("User logged out");
    })
    .catch((error) => {
      console.error("Logout error", error);
    });
});

// User Status //
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in", user);
    document.querySelector(".logout-btn").style.display = "block";
  } else {
    console.log("User is logged out");
    document.querySelector(".logout-btn").style.display = "none";
  }
});

const logRegBtn = document.querySelector(".log-reg-btn");
const modalRegLog = document.querySelector(".log-reg");

logRegBtn.addEventListener("click", () => {
  console.log("object");
  console.log(logRegBtn, modalRegLog);
  modalRegLog.classList.toggle("show-log-reg-window");
});
