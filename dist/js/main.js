function openSide() {
    document.getElementById('side-menu').style.width = '250px';
}

function closeSide() {
    document.getElementById('side-menu').style.width = '0px';
}

function social() {
    window.location.replace('https://www.instagram.com/4541cavineers/?hl=en');
}

// function search() {
//     var x = document.getElementById("inputTag");
//     var valueOfBox = document.getElementById("inputTag").value;
//     if (valueOfBox == "Outreach" || valueOfBox == "outreach" || valueOfBox == "out") {
//         document.getElementById("searchLink").innerHTML = "Hello";
//     } else {
//         console.log("no");
//     }
// }

function getPass() {
    window.location.replace('admin.html')
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var pass = response.pass;
            var password = document.getElementById("password").value;
            for (var i = 0; i < pass.length; i++) {
                if (password == "4541") { //pass[i].ps
                    window.location.replace("admin.html");
                } else {
                    console.log('Login in');
                }
            }
        }
    };
    xhttp.open("GET", "js/users.json", true);
    xhttp.send();
}


function getUser() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var users = response.users;
            var username = document.getElementById("username").value;
            for (var i = 0; i < users.length; i++) {
                if (username == users[i].user) { //users[i].user
                    getPass();
                } else {
                    console.log('Login in');
                }
            }
        }
    };
    xhttp.open("GET", "js/users.json", true);
    xhttp.send();
}