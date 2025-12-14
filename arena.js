const form = document.querySelector("form");
const submitBtn = document.getElementById("submit"); 
const popup = document.getElementById("popup"); 
const okBtn = document.getElementById("ok"); 
const error = document.getElementById("error");


submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const company = document.getElementById("company").value.trim();
    if (name === "" || email === "" || number === "" || company === "") {
        error.classList.add("open");
    } else {
        error.classList.remove("open");   
        popup.classList.add("open"); 
    }
});


okBtn.addEventListener("click", () => {
    popup.classList.remove("open"); 
    form.reset();
});


