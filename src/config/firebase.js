import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyB-3jJ90FDFHGxxIdhboITsnk5fMC7-48k",
  authDomain: "aura-websita.firebaseapp.com",
  projectId: "aura-websita",
  storageBucket: "aura-websita.appspot.com",
  messagingSenderId: "731470548195",
  appId: "1:731470548195:web:4460ed1d9b9f472a0309d6",
  measurementId: "G-PRZBKZN5GP",
};

firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: !0 })
  .catch(() => {
    console.warn("DB offline support not available");
  });
export default {
  notificationSupported: firebase.messaging.isSupported(),
  messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
};
