import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZHAJ9IrpzFJSLZlrsb0hOBhgwvP9C5tk",
    authDomain: "fb-clone-ec8c3.firebaseapp.com",
    projectId: "fb-clone-ec8c3",
    storageBucket: "fb-clone-ec8c3.appspot.com",
    messagingSenderId: "826377189970",
    appId: "1:826377189970:web:468d60f8234d0ae175fd8b",
    measurementId: "G-TY5X3EDEY7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;


