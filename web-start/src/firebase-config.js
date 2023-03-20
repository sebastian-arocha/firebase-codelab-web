/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCIXBE7yx3zLUqszn6Rfm7k-XLlKD2kqOY",
  authDomain: "friendlychat-sebastian-arocha.firebaseapp.com",
  projectId: "friendlychat-sebastian-arocha",
  storageBucket: "friendlychat-sebastian-arocha.appspot.com",
  messagingSenderId: "211011486100",
  appId: "1:211011486100:web:b38af5c8acced102404f81"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}