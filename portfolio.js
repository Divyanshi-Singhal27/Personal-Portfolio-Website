let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    if(navbar.style.display === "none" || navbar.style.display ===""){
        navbar.style.display = "block";
    }
    else{
        navbar.style.display = "none";
    }
}