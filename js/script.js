// Tabs
const tabs = document.querySelectorAll(".tabheader__item"),
  tabsContent = document.querySelectorAll(".tabcontent"),
  tabsParent = document.querySelector(".tabheader__items");

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.style.display = "none";
  });

  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
}

function showTabContent(i = 0) {
  tabsContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
}

hideTabContent();
showTabContent(1);

tabsParent.addEventListener("click", function (event) {
  const target = event.target;
  if (target && target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

// Timer

const deadLine = "2023-09-05";

function getTime(endTime) {
  let days, hours, minutes, seconds;
  const t = Date.parse(endTime) - Date.parse(new Date());
  if (t <= 0) {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  } else {
    days = Math.floor(t / (1000 * 60 * 60 * 24));
    hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    minutes = Math.floor((t / (1000 * 60)) % 60);
    seconds = Math.floor((t / 1000) % 60);
  }
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
getTime(deadLine);

function timer(selector, endtime) {
  const time = document.querySelector(selector);
  const days = time.querySelector("#days");
  const hours = time.querySelector("#hours");
  const minutes = time.querySelector("#minutes");
  const seconds = time.querySelector("#seconds");
  const timerID = setInterval(updateTime, 1000);
  updateTime();
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function updateTime() {
    const t = getTime(endtime);
    days.textContent = getZero(t.days);
    hours.textContent = getZero(t.hours);
    minutes.textContent = getZero(t.minutes);
    seconds.textContent = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timerID);
    }
  }
}
timer(".timer", deadLine);

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
const timerModalOpen = setTimeout(modalOpen, 3000);
window.addEventListener("scroll", scroll);

// Request

const inName = document.querySelector(".inName"),
inPhone = document.querySelector(".inPhone");
let reqButton = document.querySelector(".req");
if (inName.value || inPhone.value) {
  reqButton.setAttribute(disabled, true);
}
console.log(modal)
modal.addEventListener('click', (e) => {if(e.target.classList.contains('modal__close')){
  console.log(e.target);modalClose()}})

reqButton.addEventListener("click", (e) => {
  if (!inName.value || !inPhone.value) {
    reqButton.setAttribute(disabled, true);
  } else {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
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
