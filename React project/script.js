const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
async function loadFact() {
  const res = await fetch(
    "https://ymfgdznigmrepiyjgpyg.supabase.co/rest/v1/fact",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltZmdkem5pZ21yZXBpeWpncHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MTc0NzIsImV4cCI6MTk5Mjk5MzQ3Mn0.mnoRiDkIE5y566h-imDphtDs4wd4Vx7ELr-Q5kelBU4",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltZmdkem5pZ21yZXBpeWpncHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MTc0NzIsImV4cCI6MTk5Mjk5MzQ3Mn0.mnoRiDkIE5y566h-imDphtDs4wd4Vx7ELr-Q5kelBU4",
      },
    }
  );
  const dataJSON = await res.json();
  createFactElement(dataJSON);
}
loadFact();

const btnOpen = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".fact-list");

factList.innerHTML = "";
function createFactElement(dataArray) {
  const factHTML = dataArray
    .map(
      (data) =>
        `<li class="fact">
              <p>
                ${data.text}
                <a href="${data.source} " class="source"
                  >(Source)</a>
              </p>
              <span class="tag" style="background-color: #3b82f6">${data.category}</span>
              <div class="vote-buttons">
                <button>👍 24</button>
                <button>🤯 9</button>
                <button>⛔️ 4</button>
              </div>
            </li>`
    )
    .join(" ");
  factList.insertAdjacentHTML("afterbegin", factHTML);
}
createFactElement(initialFacts);
// createFactElement(initialFacts);

// factList.insertAdjacentHTML("afterbegin", "<li>Hello BMPS</li>");
// factList.insertAdjacentHTML("afterbegin", "<li>Hello BMPS</li>");

btnOpen.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btnOpen.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btnOpen.textContent = "Share A Fact";
  }
});

// const text = "Yangon is big capital of myanmar";
// let voteIntresting = 24;
// let voteMinBlowning = 9;
// let falseVote = 4;

// voteIntresting = voteIntresting + 1;
// console.log(voteIntresting);

// let totalUpVote = voteIntresting + voteMinBlowning;
// console.log("Total Up Vote :", totalUpVote);

// const isCorrect = totalUpVote > falseVote;
// console.log(isCorrect);

/*
string => Word;
Number => 1, 2, 3 => 62 => 53
Boolean => True / false;
undefined => undefined;
Null => Null;
Symbol =>
Bin int =>

*/

// 0
// Empty String
// Null
// Undefined

/* Function   */
// function factAge(factYear) {
//   const age = 2023 - factYear;
//   if (age > 0) {
//     return age;
//   } else {
//     return "Impossible Year";
//   }
// }
// const factAge = function (factYear) {
//   const age = 2023 - factYear;
//   if (age > 0) {
//     return age;
//   } else {
//     return "Impossible Year";
//   }
// };
// const factAge = (factYear) => {
//   const age = 2023 - factYear;
//   if (age > 0) {
//     return age;
//   } else {
//     return "Impossible Year";
//   }
// };
// console.log(factAge(2024));

// const arr = () => console.log("Hello World");
// arr();

// const age = (birthYear) => 2023 - birthYear;
// console.log(age(2002));

// const voteIntresting = 20;
// const voteMinBlowning = 5;
// const voteFalse = 3;
// const totalVote = voteIntresting + voteMinBlowning;

// if(totalVote > voteFalse){
//   console.log('The Fact Is True');
// }else{
//   console.log('Might Be False, Check Back');
// }

// const message =
//   totalVote > voteFalse ? "The Fact Is True" : "Might Be False, Check Back!";
// console.log(message);

// const arr = [2, 4, 6, 8];
// const allStudents = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const allArr = [...arr, allStudents];
// console.log(allArr);
// console.log(allStudents.length);
// console.log(arr);

/*  Array   */
// const factData = [
//   "React is being developed by Meta (formerly facebook) ",
//   "https://opensource.fb.com/",
//   "TECHNOLOGY",
//   24,
//   9,
//   4,
// ];

// const [text, source, category] = factData;
// console.log(text, source, category);

// console.log(factData[0]);
// const factText = factData[0];
// console.log(factText);

/*   Object   */
// const factObj = {
//   text: "React is being developed by Meta (formerly facebook) ",
//   category: "Socity",
//   createIn: 2015,
//   inCorrect: true,
//   summary: function () {
//     return `This is testing function in object`;
//   },
// };
// console.log(factObj.text);
// console.log(factObj["text"]);
// console.log(factObj.summary());
// const { text, category, createIn, inCorrect } = factObj;
// console.log(text, createIn, category, inCorrect);

// Loop
// const arrX = [2, 3, 4, 5].map(function (val) {
//   return val * 2;
// });
// console.log(arrX);

// [2, 4, 6, 8].forEach(function (val) {
//   console.log(val);
// });

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];
// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];
// const colorValues = CATEGORIES.map((obj) => obj.color);
// console.log(colorValues);

// const factAge = initialFacts.map((el) => 2023 - el.createdIn);
// console.log(factAge);
