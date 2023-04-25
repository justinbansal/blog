import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig from "./firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

function writeUserData(userId, name, email, imageUrl) {
  set(ref(database, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

writeUserData('1', 'test', 'test', 'test');
