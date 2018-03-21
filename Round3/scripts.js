var link = document.getElementsByClassName('readLink');
var close = document.getElementsByClassName('closer');

var body = document.getElementsByTagName("body")[0];

for (let rL of link) {  rL.addEventListener("click", openModal);  } // listen for clicks on all "Read More" links
for (let cL of close) {  cL.addEventListener("click", closeModal);  } // listen for clicks on all modal close triggers ("x", "close", and clickout)

function openModal() {
    const mod = document.querySelector(`div[data-key="${this.dataset.key}"]`); // isolates modal whose "read more" link was clicked
    mod.style.display = "block";
    mod.setAttribute('aria-hidden', 'false');
    body.style.overflow = "hidden";
}

function closeModal() {
    const mod = document.querySelector(`div[data-key="${this.dataset.key}"]`); // isolates modal whose close trigger was hit
    mod.style.display = "none";
    mod.setAttribute('aria-hidden', 'true');
    body.style.overflow = "auto";
}
