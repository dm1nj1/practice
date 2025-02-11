// local reviewers data
const reviews = [
    {
        id: 0,
        name: "어깨걸이극락조(수컷)",
        job: "암컷에게 열렬히 구애중",
        img: "https://i.ytimg.com/vi/8yD-pQZ3z3s/hqdefault.jpg",
        text: "뉴기니의 해발 1,000m 이상의 고지대에 분포한다. 식성은 잡식성으로 과일, 곤충 및 작은 동물 등이다. 몸길이는 약 26cm이며, 극락조과가 으레 그렇듯 성적이형성이 매우 강하다. 수컷은 검은색이며 머리 위쪽과 가슴깃털은 청록색이며, 등과 목 밑에 망토와 같은 깃털이 있다. 암컷은 갈색 얼룩무늬가 존재한다.",
    },
    {
        id: 1,
        name: "흰머리오목눈이",
        job: "짧은 다리의 역습",
        img: "https://i.namu.wiki/i/C1tQVWXx8Ue6gyhkF6_pkJGGCljZCdeO1wCvZFNU7knw4ThcroV34vBdt9f8lg8Jd7TK0B4lqLhaWmetbi7x6A.webp",
        text: "참새목 오목눈이과에 속하는 조류. 공통적으로 성체의 전장(부리 끝에서 꼬리 깃 끝까지의 길이)이 14cm밖에 되지 않는다. 또한 흰머리오목눈이를 제외한 오목눈이들은 머리에 세로로 네개의 검은 줄이 있다. 몸보다 꽁지의 길이가 더 길며, 부드러운 곡선을 그리며 비행한다. 그리고 매력적인 오렌지색 눈꺼풀을 가지고 있다.",
    },
    {
        id: 2,
        name: "메인쿤",
        job: "잘생김",
        img: "https://wooripet.co.kr/data/file/come3/thumb-1040042194_C5lSEqXU_A81B1B70-F742-44D4-896D-49E3A03A5C71_1400x1637.jpg",
        text: "잘생겼다. 잘생긴 고양이\^w^/ 현재 메인 주를 상징하는 동물이다. 19세기 말 눈에 있는 메인쿤이 첫 발견으로 알려졌으며 20세기 초에 세계적으로 널리 알려진 종이 됐다. 현재에는 세계에서 가장 인기 있는 고양이 품종 중 하나다.",
    }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prevbtn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// set starting item
let currentItem = 3;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});