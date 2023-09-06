function modalOpen() {
  document.querySelector('.modal').style.display = "block";
  document.body.style.overflow = "hidden";
  clearInterval(timerModalOpen);
  }
  function modalClose() {
    document.querySelector('.modal').style.display = "none";
  document.body.style.overflow = "";
  }
  const timerModalOpen = setTimeout(modalOpen, 15000);
window.addEventListener("scroll", scroll);
function modals() {
    // Modal

const openModal = document.querySelectorAll(".modalOpen"),
closeModal = document.querySelector(".modalClose"),
modal = document.querySelector(".modal");



openModal[0].addEventListener("click", modalOpen);
openModal[1].addEventListener("click", modalOpen);
closeModal.addEventListener("click", modalClose);
modal.addEventListener("click", (e) => {
if (e.target === modal) {
  modalClose();
}
});
modal.addEventListener("keydown", (e) => {
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


export default modals
export {modalClose}