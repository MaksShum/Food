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