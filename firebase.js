// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCa-ZtAQyYjklugNYUjzDiE-PXHoXX30Iw",
  authDomain: "school-directory-2bc1c.firebaseapp.com",
  projectId: "school-directory-2bc1c",
  storageBucket: "school-directory-2bc1c.appspot.com",
  messagingSenderId: "362197734083",
  appId: "1:362197734083:web:3f3ccec154c605f1b8c876"
};

firebase.initializeApp(firebaseConfig)
export default firebase

// const app = initializeApp(firebaseConfig)
// const db = getFirestore(app)
// export { db }
