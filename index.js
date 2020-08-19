// Import stylesheets
import './style.css';
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBfWoNBt4gG7ObGsipuGI1gMSnzjaA9Anw",
    authDomain: "goldwingsevents-65a24.firebaseapp.com",
    databaseURL: "https://goldwingsevents-65a24.firebaseio.com",
    projectId: "goldwingsevents-65a24",
    storageBucket: "goldwingsevents-65a24.appspot.com",
    messagingSenderId: "227976863125",
    appId: "1:227976863125:web:c52f61e67f692df2b0ea9c",
    measurementId: "G-M04MX9LV78"
  };
  // Initialize Firebase
  
  
  firebase.initializeApp(firebaseConfig);
  
  
 firebase.analytics();
  
  firebase.auth.Auth.Persistence.LOCAL;

  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  
  //Add Login Event
  btnLogin.addEventListener("click",
 () => {
   // Get email and Password
   const email = txtEmail.value;
   const password = txtPassword.value;
   const auth = firebase.auth();
    //Sign In
   const promise = auth.signInWithEmailAndPassword(email,password);
   promise.catch(e => console.log(e.message));
 });

 btnLogout.addEventListener("click",
 () => {
    firebase.auth().signOut();
 });

 // Listen to the current Auth state
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser); 
  }
  else {
    console.log("Not loged in"); 
  }
});
// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;