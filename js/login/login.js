(function() {
    document.getElementById('loginButton').addEventListener('click', function() {
        var user = document.getElementById('username').value;
        var pass = document.getElementById('password').value;
        var acceptedUsers = {
            "userName": "Ryan",
            "userName": "Siena"
        };
        var acceptedPass = {
            "passWords": "4541",
            "passWords": "wordPass"
        }
        if (user == "Ryan" && pass == "4541") {
            sessionStorage.setItem("loggedIn", 'Metric_code: 800');
            window.location.replace('admin.html');
        } else if (user == "Siena" && pass == "WordPass") {
            sessionStorage.setItem("loggedIn", 'Metric_code: 801');
            window.location.replace('admin.html');
        } else {
            alert('Incorrect Username or Password');
        }
    })
})()
/*//Protects the functions















// Your web app's Firebase configuration
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

                      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
                          .then(function() {
                              return firebase.auth().signInWithEmailAndPassword(username, password);
                          })
                          .catch(function(error) {
                              var errorCode = error.code;
                              var errorMessage = error.message;
                          });

                      firebase.auth().onAuthStateChanged(function(user) {
                          if (user) {
                              // User is signed in.
                              //         document.getElementById('adminData').style.display = 'none';
                              //      document.getElementById('loginData').style.display = 'block';
                              // window.location = 'admin.html';
                              console.log('logged in');
                          } else {
                              // No user is signed in.
                              // document.getElementById('adminData').style.display = 'block';
                              //window.location.replace('admin.html');
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
                    */