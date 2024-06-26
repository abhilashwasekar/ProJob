
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYv1_-N-ypuk_ZXf9qSMHCJLEYi478xD8",
  authDomain: "projob-4b74b.firebaseapp.com",
  projectId: "projob-4b74b",
  storageBucket: "projob-4b74b.appspot.com",
  messagingSenderId: "794028456726",
  appId: "1:794028456726:web:168500cdd4f82065426e37",
  measurementId: "G-PMLTK1NPFR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);