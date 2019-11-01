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
                if (password == pass[i].ps) { //pass[i].ps
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

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}