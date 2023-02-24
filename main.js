import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { createUserWithEmailAndPassword  } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js'
import { initializeAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCpqSS5puSW8Ba0kqOPBj0CVFsy4EazGuU",
    authDomain: "fir-app-prueba-bf1ab.firebaseapp.com",
    projectId: "fir-app-prueba-bf1ab",
    storageBucket: "fir-app-prueba-bf1ab.appspot.com",
    messagingSenderId: "124582412098",
    appId: "1:124582412098:web:4f568009220096154392db",
    measurementId: "G-60BK199GDH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const db = getFirestore(app);
    const auth = initializeAuth(app);




    $("#registrarse").click(function () {
        var email=$("#correo").val();
        var password=$("#contraseña").val();
        alert("valores procesador"+email+password);
        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("exito");
        const user = userCredential.user;
        window.location.href = "patitas.html";
        // ...
      })
      .catch((error) => {
        console.log("fracaso");
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
        // ..
      });
        
    })
