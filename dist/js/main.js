function openSide() {
    document.getElementById('side-menu').style.width = '250px';
}

function closeSide() {
    document.getElementById('side-menu').style.width = '0px';
}

function social() {
    window.location.replace('https://www.instagram.com/4541cavineers/?hl=en');
}

function logout() {
    sessionStorage.clear();
    window.location.replace('index.html');
}