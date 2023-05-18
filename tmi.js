const tmi = [
  {
      question: "오늘 날씨는?",
      answer: "맑음",
  },
  {
      question: "점메추",
      answer: "쌀밥",
  },
  {
      question: "저메추",
      answer: "보리밥",
  },
  {
      question: "자바스크립은?",
      answer: "어려워",
  },
  {
      question: "HTML은?",
      answer: "어려웡",
  }
];

const question = document.querySelector('#tmi>span:nth-child(1)');
const answer = document.querySelector('#tmi>span:nth-child(2)');
const todaysTmi = tmi[Math.floor(Math.random()*tmi.length)]


question.innerText = todaysTmi.question;
answer.innerText = todaysTmi.answer;