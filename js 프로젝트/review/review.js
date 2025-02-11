const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://flexible.img.hani.co.kr/flexible/normal/970/777/imgdb/resize/2019/0926/00501881_20190926.webp",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sole out chambray pop-up. Shaman humblebrag picked coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://lh3.googleusercontent.com/proxy/DNVIwWacFoW3Za-pUNm8BiFDjLDOUAaq6y3dVk0TVXZSvlRvLGAqznzidRc1c7d-TqVhTxP8-h2D14HNgDEwfWvD0td6hQK1okNte93oCTs",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe. photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "Intern",
    img:
      "https://images.mypetlife.co.kr/content/uploads/2022/11/30083521/AdobeStock_141644461-scaled.jpeg",     
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 9-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette", 
    },
   {
     id: 4,
     name: "bill anderson",
     job: "the boss",
     img: 
       "https://cdn.royalcanin-weshare-online.io/MmnEK2oBG95Xk-RBmvVo/v28/sacred-birman-kitten-birth-growth-brand-emblematic",
     text:
       "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray",
    },
];

const img = document.getElementById("cat-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showCat();
});

function showCat() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showCat();
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length -1;
    }
    showCat();
});