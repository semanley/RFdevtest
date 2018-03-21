var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var body = document.getElementsByTagName("body")[0];

function openModal1() {
    modal1.style.display = "block";
    modal1.setAttribute('aria-hidden', 'false');
    body.style.overflow = "hidden";
}

function closeModal1() {
    modal1.style.display = "none";
    modal1.setAttribute('aria-hidden', 'true');
    body.style.overflow = "auto";
}

function openModal2() {
    modal2.style.display = "block";
    modal2.setAttribute('aria-hidden', 'false');
    body.style.overflow = "hidden";
}

function closeModal2() {
    modal2.style.display = "none";
    modal2.setAttribute('aria-hidden', 'true');
    body.style.overflow = "auto";
}

function openModal3() {
    modal3.style.display = "block";
    modal3.setAttribute('aria-hidden', 'false');
    body.style.overflow = "hidden";
}

function closeModal3() {
    modal3.style.display = "none";
    modal3.setAttribute('aria-hidden', 'true');
    body.style.overflow = "auto";
}