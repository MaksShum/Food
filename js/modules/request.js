function request(){
    // Request

const inName = document.querySelector(".inName"),
inPhone = document.querySelector(".inPhone");
let reqButton = document.querySelector(".req");
if (inName.value || inPhone.value) {
reqButton.setAttribute(disabled, true);
}
modal.addEventListener("click", (e) => {
if (e.target.classList.contains("modal__close")) {
  modalClose();
}
});

reqButton.addEventListener("click", (e) => {
if (!inName.value || !inPhone.value) {
  reqButton.setAttribute(disabled, true);
} else {
  e.preventDefault();
  fetch("http://localhost:3000/requests", {
    method: "POST",
    body: JSON.stringify({
      name: inName.value,
      phone: inPhone.value,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((data) => console.log(data));

  function showThanksModal() {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.style.display = "none";
    modalOpen();
    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
              <div class="modal__content">
                  <div class="modal__close" data-close=''>×</div>
                  <div class="modal__title">Cпасибо,мы с вами свяжемся!</div>
              </div>
          `;

    document.querySelector(".modal").append(thanksModal);

    setTimeout(() => {
      thanksModal.remove();
      modalClose();
      prevModalDialog.style.display = "block";
      inName.value = "";
      inPhone.value = "";
    }, 3000);
  }
  showThanksModal();
}
});

}

module.exports = request