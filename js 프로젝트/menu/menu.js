const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img:"https://i.namu.wiki/i/DQ4Ayqbx_0l_8763FLJwIsN6E5Qyy97qnVy7OPAI7rTBprHs88rQdFivurZgZ22BlXRg2FIdVZS009D3U58AAQ.webp",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottomNavigationClasses, hammock freegan copper mug whatever cole-pressed`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img:"https://d1dxs113ar9ebd.cloudfront.net/225batonrouge/2021/06/DiningIn_ft-main.jpg",
    desc: `vaporware ipone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img:"https://www.allrecipes.com/thmb/uzxCGTc-5WCUZnZ7BUcYcmWKxjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-48974-vanilla-milkshake-hero-4x3-c815295c714f41f6b17b104e7403a53b.jpg",
    desc: `ombucha chilwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,
  }
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");
const filterBtns = document.querySelectorAll(".filter-btn");

//load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    diaplayMenuButtons();
    const categories = menu.reduce(
      function(values,item) {
      if(!values.includes(item.category)){
        values.push(item.category);
      } 
       return values;
     },
     ["all"]
 );
 const categoryBtns = categories
   .map(function(category) {
    return `<button class="filter-btn" type="button" data-id=${category}>
    ${category}
    </button>`;
 })
 .join("");
 container.innerHTML = categoryBtns;
 const filterBtns = container.querySelectorAll(".filter.btn");

});
//filter items
filterBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if(category === 'all') {
      displayMenuItems(menu)
    } else{
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
})
  return `<article class="menu-item">
  <img src=${item.img} alt=${item.title} class="photo"/>
  <div class="item-info">
    <header>
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
    </header>
    <p class="item-text">
      ${item.desc}
    </p>
  </div>
 </article>`;
});
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {}