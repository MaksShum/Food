/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculating.js":
/*!***********************************!*\
  !*** ./js/modules/calculating.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculating);

/***/ }),

/***/ "./js/modules/menu_on_day.js":
/*!***********************************!*\
  !*** ./js/modules/menu_on_day.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuOnDay);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   modalClose: () => (/* binding */ modalClose)
/* harmony export */ });
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);


/***/ }),

/***/ "./js/modules/request.js":
/*!*******************************!*\
  !*** ./js/modules/request.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");


function request(){
    // Request

const inName = document.querySelector(".inName"),
inPhone = document.querySelector(".inPhone");
let reqButton = document.querySelector(".req");
if (inName.value || inPhone.value) {
reqButton.setAttribute(disabled, true);
}
document.querySelector('.modal').addEventListener("click", (e) => {
if (e.target.classList.contains("modal__close")) {
  (0,_modal__WEBPACK_IMPORTED_MODULE_0__.modalClose)();
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
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.modalClose)();
      prevModalDialog.style.display = "block";
      inName.value = "";
      inPhone.value = "";
    }, 3000);
  }
  showThanksModal();
}
});

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calculating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calculating */ "./js/modules/calculating.js");
/* harmony import */ var _modules_menu_on_day__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu_on_day */ "./js/modules/menu_on_day.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/request */ "./js/modules/request.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
  
  
  
  
  
  
  

(0,_modules_calculating__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_menu_on_day__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_request__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map