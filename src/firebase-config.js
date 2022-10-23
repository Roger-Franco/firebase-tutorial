import { initializeApp } from "firebase/app";
// import {} from '@firebase/firestore'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB89vFTT-RpDOCQNOXhupQPEWVRpSoM5T0",
  authDomain: "react-firebase-tutorial-8dbb5.firebaseapp.com",
  projectId: "react-firebase-tutorial-8dbb5",
  storageBucket: "react-firebase-tutorial-8dbb5.appspot.com",
  messagingSenderId: "1018049043524",
  appId: "1:1018049043524:web:fc9ab71a4669809f353011",
  measurementId: "G-6WQ53P6MBW"
};

const app = initializeApp(firebaseConfig)

// https://www.youtube.com/watch?v=jCY6DH8F4oc&list=PLpPqplz6dKxUfvM22GXRvYA4s-mvJE0XF&index=1&ab_channel=PedroTech
// 19 minutos
export const db = getFirestore(app)