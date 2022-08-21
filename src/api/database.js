import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { config } from "../config";

// Initialize Firebase
const app = initializeApp(config.firebase);


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



