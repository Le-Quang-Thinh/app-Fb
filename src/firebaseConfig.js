import Firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAYrOxLGVaO-p4K-K5J2hFI7e0NiuF_QEg",
    authDomain: "message-a9431.firebaseapp.com",
    databaseURL: "https://message-a9431.firebaseio.com",
    projectId: "message-a9431",
    storageBucket: "message-a9431.appspot.com",
    messagingSenderId: "302388487347",
    appId: "1:302388487347:web:a5cab4dfb5c6f76de1fcc6"
  };

  
  Firebase.initializeApp(firebaseConfig);
  const ref = Firebase.database().ref('/').child('developers');
export default ref;