// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBSp11qmri5VXLQsXS_AbjANfOjieO_wos",
  authDomain: "task-reminder-react.firebaseapp.com",
  projectId: "task-reminder-react",
  storageBucket: "task-reminder-react.appspot.com",
  messagingSenderId: "155451341545",
  appId: "1:155451341545:web:d19cd5e241bc0e85188e78",
  measurementId: "G-0QZEN88QZN"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);