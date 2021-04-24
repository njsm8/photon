import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC7zkg1CFRdv0ZsmkBdmO3e4swGn92y1kI",
  authDomain: "neutral-ninja.firebaseapp.com",
  projectId: "neutral-ninja",
  storageBucket: "neutral-ninja.appspot.com",
  messagingSenderId: "1016655695419",
  appId: "1:1016655695419:web:eff274003eff2b7837961e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
