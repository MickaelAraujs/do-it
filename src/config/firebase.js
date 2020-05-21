import firebase from 'firebase'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDlK3G1l34uBKEA30PR9KkuG_BqPtlWxxw",
    authDomain: "myapp-e2632.firebaseapp.com",
    databaseURL: "https://myapp-e2632.firebaseio.com",
    projectId: "myapp-e2632",
    storageBucket: "myapp-e2632.appspot.com",
    messagingSenderId: "339916200978",
    appId: "1:339916200978:web:ffd7a63743a90a79328ccb",
    measurementId: "G-4B4QRRP74P"
}

firebase.initializeApp(firebaseConfig)

export default firebase