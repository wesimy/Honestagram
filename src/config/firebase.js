import * as firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAuiSb6wNTLfPMxLcGKrTLUi_PL3oxs44c",
  authDomain: "honestgram-49ad0.firebaseapp.com",
  databaseURL: "https://honestgram-49ad0.firebaseio.com",
  projectId: "honestgram-49ad0",
  storageBucket: "honestgram-49ad0.appspot.com",
  messagingSenderId: "31439273994"
};
firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

//const posts = database.ref().child('posts').orderByChild('title').equalTo("Example Two");
// posts.once('value',snapshot=>{
//   snapshot.forEach(item=>{
//   });
// });