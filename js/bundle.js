/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculating.js":
/*!***********************************!*\
  !*** ./js/modules/calculating.js ***!
  \***********************************/
/***/ ((module) => {

function calculating(){
    // Calculating

const size = document.querySelectorAll(
    ".calculating__choose calculating__choose_medium"
  );
  const heightElem = document.querySelector("#height");
  const weightElem = document.querySelector("#weight");
  const ageElem = document.querySelector("#age");
  const buttonPerson = document.querySelectorAll(".person");
  const norma = document.querySelector(".calculating__result");
  const res = norma.querySelector("span");
  let sex = "female",
    active = 1.55,
    weight,
    age,
    height;
  
  function getFormula() {
    if (!weight || !age || !height) {
      return "____";
    } else {
      if (sex == "male") {
        res.textContent = (
          88.36 +
          13.4 * weight +
          4.8 * height -
          5.7 * age * active
        ).toFixed(2);
      } else if (sex == "female") {
        res.textContent = (
          447.6 +
          9.2 * weight +
          3.1 * height -
          4.3 * age * active
        ).toFixed(2);
      }
    }
  }
  
  function chosePerson(e) {
    buttonPerson.forEach((item) => {
      item.classList.remove("calculating__choose-item_active");
      e.target.classList.add("calculating__choose-item_active");
      if (e.target.innerHTML == "Мужчина") {
        sex = "male";
      } else {
        sex = "female";
      }
    });
    getFormula();
  }
  
  const buttonActive = document.querySelectorAll(".active");
  function choseActive(e) {
    buttonActive.forEach((item) => {
      item.classList.remove("calculating__choose-item_active");
      e.target.classList.add("calculating__choose-item_active");
      e.target.getAttribute("data-ratio");
      active = +e.target.getAttribute("data-ratio");
      getFormula();
    });
  }
  
  buttonActive.forEach((item) => {
    item.addEventListener("click", choseActive, getFormula);
  });
  buttonPerson.forEach((item) => {
    item.addEventListener("click", chosePerson, getFormula());
  });
  
  heightElem.addEventListener("input", () => {
    height = heightElem.value;
  
    getFormula();
  });
  weightElem.addEventListener("input", () => {
    weight = weightElem.value;
  
    getFormula();
  });
  ageElem.addEventListener("input", () => {
    age = ageElem.value;
  
    getFormula();
  });
  
}

module.exports = calculating

/***/ }),

/***/ "./js/modules/menu_on_day.js":
/*!***********************************!*\
  !*** ./js/modules/menu_on_day.js ***!
  \***********************************/
/***/ ((module) => {

function menuOnDay(){
    // Menu on day

const getCard = async (url) => {
    const res = await fetch(url);
  
    return await res.json();
  };
  getCard("http://localhost:3000/menu").then((data) => {
    data.forEach((obj) => {
      createCard(obj.img, obj.altimg, obj.title, obj.descr, obj.price);
    });
  });
  
  function createCard(img, altimg, title, descr, price) {
    const element = document.createElement("div");
    element.classList.add("menu__item");
    element.innerHTML = `
      <img src=${img} alt=${altimg}>
    <h3 class="menu__item-subtitle">${title}</h3>
    <div class="menu__item-descr">${descr}</div>
    <div class="menu__item-divider"></div>
    <div class="menu__item-price">
    <div class="menu__item-cost">цена:</div>
    <div class="menu__item-total"><span>${price}</span> рублей/день</div>
    </div>
      `;
    document.querySelector(".menu .container").append(element);
  }
  
}

module.exports = menuOnDay

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./js/modules/request.js":
/*!*******************************!*\
  !*** ./js/modules/request.js ***!
  \*******************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

function slider(){
    // Slider

const current = document.querySelector("#current"),
prev = document.querySelector(".offer__slider-prev"),
next = document.querySelector(".offer__slider-next");
let count = 1;
const pictures = document.querySelectorAll(".offer__slide");
pictures.forEach((item) => (item.style.display = "none"));
pictures[count - 1].style.display = "block";

function prevCount() {
pictures.forEach((item) => (item.style.display = "none"));
if (count < 2) {
  count = 4;
} else {
  count--;
}
current.textContent = `0${count}`;
pictures[count - 1].style.display = "block";
}
function nextCount() {
pictures.forEach((item) => (item.style.display = "none"));
if (count > 3) {
  count = 1;
} else {
  count++;
}
current.textContent = `0${count}`;
pictures[count - 1].style.display = "block";
}
prev.addEventListener("click", prevCount);
next.addEventListener("click", nextCount);
}

module.exports = slider

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

function tabs(){
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
}

module.exports = tabs

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

function timer() {
    
// Timer

const deadLine = "2023-12-31";

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
}

module.exports = timer

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
const calculating = __webpack_require__(/*! ./modules/calculating */ "./js/modules/calculating.js"),
  menu_on_day = __webpack_require__(/*! ./modules/menu_on_day */ "./js/modules/menu_on_day.js"),
  modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
  request = __webpack_require__(/*! ./modules/request */ "./js/modules/request.js"),
  slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
  tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
  timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");

calculating();
menu_on_day();
modal();
request();
slider();
tabs();
timer();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map