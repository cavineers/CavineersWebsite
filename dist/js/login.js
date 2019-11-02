firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById('adminData').style.display = 'none';
        document.getElementById('loginData').style.display = 'block';
        console.log('logged in');
    } else {
        // No user is signed in.
        document.getElementById('adminData').style.display = 'block';
        console.log('Not logged in ')
    }
});

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
        // ...
    });
}

function logout() {
    firebase.auth().signOut().then(function() {
        window.location.replace('index.html');
    }).catch(function(error) {
        // An error happened.
    });
}