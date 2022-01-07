import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCa-ZtAQyYjklugNYUjzDiE-PXHoXX30Iw",
  authDomain: "school-directory-2bc1c.firebaseapp.com",
  projectId: "school-directory-2bc1c",
  storageBucket: "school-directory-2bc1c.appspot.com",
  messagingSenderId: "362197734083",
  appId: "1:362197734083:web:3f3ccec154c605f1b8c876"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const fire = firebase;
export default fire;
