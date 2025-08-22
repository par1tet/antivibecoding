let button = document.querySelector("#kill")
let countDeath = document.querySelector("#count")

button.addEventListener("click", () => {
    localStorage.setItem("count", Number(localStorage.getItem("count")) + 1)
    console.log("chlen")
    countDeath.innerHTML = "Убитые тобой вайбкодеры: " + localStorage.getItem("count")
})

