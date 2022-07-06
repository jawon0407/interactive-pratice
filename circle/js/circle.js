let container = document.querySelector(".container");
let containerText = document.querySelector(".container_text");

let startValue = 0;
let endValue = 90;
let speed = 100;

let progress = setInterval(() => {
  startValue++;
  containerText.textContent = `${startValue}%`;
  console.log(startValue);
  container.style.background = `conic-gradient(yellowgreen ${
    startValue * 3.6
  }deg, white 0deg)`;

  if (startValue == endValue) {
    clearInterval(progress);
  }
}, speed);
