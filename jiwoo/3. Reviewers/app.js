const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "girl_1.jpg",
        text: "meow",
    },
    {
        id: 2,
        name: "anna",
        job: "doctor",
        img: "girl_2.jpg",
        text: "mesfdowe",
    },
    {
        id: 3,
        name: "josh",
        job: "actor",
        img: "girl_3.jpg",
        text: "medfdsfe",
    },
    {
        id: 4,
        name: "lina",
        job: "home protect",
        img: "girl_4.jpg",
        text: "mamaama",
    }
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};


nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson();
});


prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length -1;
    }
    showPerson();
});

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random()* reviews.length);
    console.log (currentItem);
    showPerson();
})