const openBtn = document.getElementById("open-btn");
const modalContainer = document.getElementById("modal-container");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
})

closeBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
})