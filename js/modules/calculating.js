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