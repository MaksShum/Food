function modals() {
    // Modal

const openModal = document.querySelectorAll(".modalOpen"),
closeModal = document.querySelector(".modalClose");
modal = document.querySelector(".modal");

function modalOpen() {
modal.style.display = "block";
document.body.style.overflow = "hidden";
clearInterval(timerModalOpen);
}
function modalClose() {
modal.style.display = "none";
document.body.style.overflow = "";
}

openModal[0].addEventListener("click", modalOpen);
openModal[1].addEventListener("click", modalOpen);
closeModal.addEventListener("click", modalClose);
modal.addEventListener("click", (e) => {
if (e.target === modal) {
  modalClose();
}
});
document.addEventListener("keydown", (e) => {
if (e.code === "Escape") {
  modalClose();
}
});

function scroll() {
if (
  window.pageYOffset + document.documentElement.clientHeight >=
  document.documentElement.scrollHeight - 1
) {
  modalOpen();
  window.removeEventListener("scroll", scroll);
}
}
const timerModalOpen = setTimeout(modalOpen, 15000);
window.addEventListener("scroll", scroll);
}


module.exports = modals