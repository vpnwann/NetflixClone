// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, push } from "firebase/database";
import {  query, orderByChild, update } from 'firebase/database';
import 'firebase/database';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {

  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Get a reference to the database service
const database = getDatabase(app);

export { database, ref, get, push , query, orderByChild, update, auth };
