// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const img_fortune = document.querySelector(".fortune_cookie")
const btn_reset = document.querySelector("#btn_reset")
// Eventos
img_fortune.addEventListener('click', handleTryClick)
btn_reset.addEventListener('click', handleTryClick)
// Funções

function handleTryClick(event) {
  event.preventDefault() // nao faca o padrao
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}