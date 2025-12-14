const form = document.querySelector("form");
const submitBtn = document.getElementById("submit");
const popup = document.getElementById("popup");
const inner = document.querySelector(".inner");
const okBtn = document.getElementById("ok");
const error = document.getElementById("error");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();

    if (name === "" || email === "" || number === "") {
        error.classList.add("open")
    } else {
        error.classList.remove("open");
        popup.classList.add("open");
        inner.style.opacity = "1";
    }
});

okBtn.addEventListener("click", () => {
    popup.classList.remove("open");
    inner.style.opacity = "0"; 
    form.reset();
});
