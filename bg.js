const images = [
    "1.jpeg","2.jpeg","3.jpeg"
];



// 위 배열에서 랜덤으로 하나 선정하여 변수에 대입
const chosenImage = images[Math.floor(Math.random()*images.length)];

// 이미지 태그(요소) 생성
const bgImage = document.createElement("img");

// 생성한 이미지 태그(요소)에 경로(src) 추가
bgImage.src = chosenImage;
/* 이렇게 해도됨
bgImage.setAttribute('src',chosenImage);
*/

// 그렇게 만들어진 이미지 요소를 document상에 보이도록 추가
document.body.appendChild(bgImage);