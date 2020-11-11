import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCDcAcoS17fLmuw1tzAmG1BPIXU2EkmcRA",
    authDomain: "authandstorage-3d036.firebaseapp.com",
    databaseURL: "https://authandstorage-3d036.firebaseio.com",
    projectId: "authandstorage-3d036",
    storageBucket: "authandstorage-3d036.appspot.com",
    messagingSenderId: "1054998817996",
    appId: "1:1054998817996:web:a33b375c07b182efd3e669"
}

firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()

export default firebase