import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { config } from "../config";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messagingSenderId: config.firebase.messagingSenderId,
  appId: config.firebase.appId,
  measurementId: config.firebase.measurementId,
  databaseURL: config.firebase.databaseURL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export const saveData = async (atPath, data) => {
  return set(ref(database, atPath), data);
};

export const getData = async (query) => {
  try {
    const dbRef = ref(database);
    const data = await get(child(dbRef, query));
    if (data.exists()) {
      console.log(data.val());
      return data.val();
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Failed to get data" + error);
  }
};



