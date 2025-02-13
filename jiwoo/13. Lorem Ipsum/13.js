// lorem text
const text = [`hello`
];

const form = document.querySelector('.lorem-form');
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = parseInt (amount.value);
    const random = Math.floor(Math.random() * text.length);
    
    //empty
    // -1
    // > 9
    if(isNaN(value) || value <=0 || value > 9) {
        result.innerHTML = `<p class="result">${text[0]}</p>`;
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText
            .map(function (item) {
                return `<p class="result">${item}</p>`;
            })
            .join("");
        result.innerHTML = tempText;
    }
});