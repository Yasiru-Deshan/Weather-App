import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_saRlip0malTvL9CfC3a_JVF81XLEkcE",
  authDomain: "fir-react-auth-71eca.firebaseapp.com",
  projectId: "fir-react-auth-71eca",
  storageBucket: "fir-react-auth-71eca.appspot.com",
  messagingSenderId: "555405046023",
  appId: "1:555405046023:web:baeb88ffbef76bc3d6d5a2",
  measurementId: "G-VCJBPN6B0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);