import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyABinNFq-d6NirYcuNbyabCPbanma0jZ9A",
  authDomain: "mydropbox-clone-b0acc.firebaseapp.com",
  projectId: "mydropbox-clone-b0acc",
  storageBucket: "mydropbox-clone-b0acc.firebasestorage.app",
  messagingSenderId: "388425060297",
  appId: "1:388425060297:web:dfd17f8f056e8e09fd2218"
})

const firestore = app.firestore()


export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app