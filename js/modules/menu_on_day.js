

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

export default menuOnDay