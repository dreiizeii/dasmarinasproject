const form = document.querySelector(".survey");
const submitBtn = document.getElementById("submit"); 
const popup = document.getElementById("popup"); 
const okBtn = document.getElementById("ok"); 
const error = document.getElementById("error");


submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    const name = document.getElementById("name").value.trim();
    const barangay = document.querySelector("select").value;
    const address = document.getElementById("address").value.trim();
    const concern = document.getElementById("concern").value.trim();
    const file = document.getElementById("file").files.length;
    if (name === "" || barangay === "" || address === "" || concern === "" || file === 0) {
        error.classList.add("open");
    } else {
        error.style.display = "none";   
        popup.classList.add("open"); 
    }
});


okBtn.addEventListener("click", () => {
    popup.classList.remove("open"); 
    form.reset(); 
});


