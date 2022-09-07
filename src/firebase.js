import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvaVG7VnMXR1HyNFXJgWgbpvHN7MJSkjc",
  authDomain: "todo-app-623da.firebaseapp.com",
  projectId: "todo-app-623da",
  storageBucket: "todo-app-623da.appspot.com",
  messagingSenderId: "1062777107843",
  appId: "1:1062777107843:web:7d224ab8f1c12b1953f2b6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;

      localStorage.setItem("name", name);
    })
    .catch((error) => {
      console.log(error);
    });
};
