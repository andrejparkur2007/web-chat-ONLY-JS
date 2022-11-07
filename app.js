let plug = document.getElementById("plug");
let pon = document.getElementById("pon");
let aga = document.getElementById("aga");
let int_epta = document.getElementById("msg");
let tip = document.getElementById("tip");

let put = String(int_epta);

aga.onclick = function () {
    pon.innerHTML = put;
}

// function redirect() {
//     tip.textContent = 'Online';
// }

// let aga_epta = setTimeout(redirect, 1000);


let modal = document.getElementById("mymodal");
let btn = document.getElementById("open");
let close = document.getElementsByClassName("close_modal")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}


