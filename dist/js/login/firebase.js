var app_firebase = {};

(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyBYhP0aoeLbhr7djSUj4cMxbWvt49ThWiE",
        authDomain: "cavineerswebsite.firebaseapp.com",
        databaseURL: "https://cavineerswebsite.firebaseio.com",
        projectId: "cavineerswebsite",
        storageBucket: "cavineerswebsite.appspot.com",
        messagingSenderId: "621276718053",
        appId: "1:621276718053:web:47ee26789eb8841a02450c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    app_firebase = firebase;
})()