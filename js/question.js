import { questions  } from "./data.js";

// console.log("질문 페이지")
// console.log(questions[0].number)
// console.log(questions[0].question)
// console.log(questions[0].choices[0].text)
// console.log(questions[0].choices[1].text)

const progressBar = document.querySelector(".progress .value");
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");
let currentNumber = 0;
let mbti = "";
//choice1El 과 choice1El2에 클릭 이벤트를 걸어 놓는다.
choice1El.addEventListener('click',function(){extQuestion(0)})

choice2El.addEventListener('click',function(){nextQuestion(1)})


function nextQuestion(choiceNumber){
  if(currentNumber == questions.length -1){

      console.log(mbti);
      showResultPage();
      return ;
  }else{
    mbti = mbti + questions[currentNumber].choices[choiceNumber].value;
    currentNumber = currentNumber + 1;
    renderQuestion();
  }
}

function renderQuestion(){
const question = questions[currentNumber];
progressBar.style.width = (currentNumber + 1) * 10 + '%';
numberEl.innerHTML = question.number;
questionEl.innerHTML = question.question;
choice1El.innerHTML = question.choices[0].text;
choice2El.innerHTML = question.choices[1].text;
}

function showResultPage(){
  //쿼리스트링을 만들어서 결과 페이지를 호출
  location.href='./result.html?mbti=' + mbti;
}
renderQuestion();

