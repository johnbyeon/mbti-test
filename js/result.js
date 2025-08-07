import { mbtis, results} from "./data.js";
function teacherSearch(){
  const mbti = new URLSearchParams(location.search).get('mbti');
  console.log(mbti);

  const title = document.querySelector(".page-title");
  const characterEl = document.querySelector(".character");
  const boxsEls = document.querySelectorAll(".box");
  const jobsEls = document.querySelectorAll(".job");
  const lectureEl = document.querySelector(".result .lecture");
  const lectureImgEl =  document.querySelector(".lecture img")
  
  let result =  results[mbtis[mbti]];
  title.innerHTML = result.title;
  characterEl.src = result.character;
  boxsEls.forEach((box, Index) => {
    box.innerHTML = result.results[Index];
  });
  jobsEls.forEach((job, Index) => {
    job.innerHTML = result.jobs[Index];
  });
  lectureEl.href = result.lectureUrl;
  lectureImgEl.src = result.lectureImg;

}
teacherSearch();
function johnsSearch(){
  const pageTitle = document.querySelector(".page-title");
  const box1 = document.querySelector(".box1");
  const box2 = document.querySelector(".box2");
  const box3 = document.querySelector(".box3");
  const box4 = document.querySelector(".box4");
  const job1 = document.querySelector(".job1");
  const job2 = document.querySelector(".job2");
  const img = document.querySelector(".result img");
  const currentURL = window.location.href;

  console.log(currentURL); 
  let mbti1 = currentURL.substring(currentURL.indexOf("=")+1, currentURL.length+1);
  //가져온 속성이 Mbti인지 확인
  let mbtiURL = currentURL.substring(currentURL.indexOf("?")+1, currentURL.indexOf("="));
  //가져온 속성이 Mbti인지 확인
  console.log(mbtiURL);
  const numberEl = document.querySelector(".number");

  if(mbtiURL === "mbti"){
    let result =  results[mbtis[mbti1]]
    console.log(result.title);
    pageTitle.innerHTML = result.title;
    box1.innerHTML = result.results[0];
    box2.innerHTML = result.results[1];
    box3.innerHTML = result.results[2];
    box4.innerHTML = result.results[3];
    job1.innerHTML = result.jobs[0];
    job2.innerHTML = result.jobs[1];
    img.src = result.lectureImg;
  }
}