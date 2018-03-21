var link = document.getElementsByClassName('readLink');
var close = document.getElementsByClassName('closer');

var body = document.getElementsByTagName("body")[0];

for (let rL of link) {  rL.addEventListener("click", openModal);  }
for (let cL of close) {  cL.addEventListener("click", closeModal);  }

function openModal() {
    const mod = document.querySelector(`div[data-key="${this.dataset.key}"]`);
    mod.style.display = "block";
    mod.setAttribute('aria-hidden', 'false');
    body.style.overflow = "hidden";
}

function closeModal() {
    const mod = document.querySelector(`div[data-key="${this.dataset.key}"]`);
    mod.style.display = "none";
    mod.setAttribute('aria-hidden', 'true');
    body.style.overflow = "auto";
}
