// import anime from "./lib/anime.es.js";

//target = element's class
anime({
  targets: ".square",
  width: "400px",
  backgroundColor: "#FFF",
  duration: 2000,
  direction: "alternate",
  endDelay: 1000,
  easing: "easeInOutSine",
  loop: true,
});

//target = value

anime({
  targets: "input",
  value: [0, 1000],
  easing: "linear",
  round: 0.5,
  duration: 5000,
});

//target = object will write function in anime object
const span = document.querySelector("span");

let prop = {
  prop1: 0,
  prop2: "0%",
};

anime({
  targets: prop,
  prop1: 100,
  prop2: "100%",
  easing: "linear",
  round: 1,
  duration: 5000,
  update: () => {
    span.innerHTML = `${prop.prop1}  ${prop.prop2}`;
  },
});

//target = object to animate

anime({
  targets: [`.square2`, `.square4`],
  translateY: 400,
});

//property = endDelay, delay, duration, loop, easing, round, function parameter(el, i, l) 그 안의 값을 조절하려면 value로 조절 가능
anime({
  targets: ".square5",
  translateX: {
    value: 200,
    duration: 1000,
  },
  rotate: {
    value: 360,
    duration: 2000,
  },
  translateY: {
    value: 200,
    duration: 1000,
    easing: "easeInOutSine",
  },
});

anime({
  targets: ".circle",
  translateX: 200,
  direction: "alternate",
  delay: function (el, i, l) {
    console.log(el);
    console.log(i);
    console.log(l);
    return l * 100;
  },
  endDelay: function (el, i, l) {
    return (l - i) * 100;
  },
  loop: true,
});

/*
    animation parameter 
    direction : normal,reverse, alternate : 0% -> 100% -> 0%,
    loop : true, false, number(반복횟수),
    autoplay: true, false,
*/

/*
    animation value
    px, % ... 생략 가능
    *=, +=, -= 가능 기준은 css, js 에서 설정해준 값
    시작점과 끝지점 지정 가능 translateX : [100, 200] 100px -> 200px
    color : #000, #fff, rgb(0,0,0), rgba(0,0,0,0), hsl(0,0,0), hsla(0,0,0,0) 가능
*/

anime({
  targets: ".circle2",
  direction: "alternate",
  loop: true,
  translateX: {
    value: "+=500",
  },
  width: {
    value: "-=40",
    duration: 3000,
    easing: "easeInOutQuad",
  },
  rotate: {
    value: "+=2turn",
    duration: 3000,
    easing: "easeInOutSine",
  },
  backgroundColor: {
    value: "rgb(255, 0, 0, 0.5)",
    duration: 3000,
    easing: "easeInOutSine",
  },
});

// exception .timeline .add
anime
  .timeline({
    delay: 1000,
    easing: "easeInOutSine",
    direction: "alternate",
    loop: true,
  })
  .add({ targets: ".circle01", translateX: 200 }, 0)
  .add({ targets: ".circle02", translateX: 300 }, 1000)
  .add({ targets: ".circle03", translateX: 400 }, 0)
  .add({ targets: ".circle04", translateX: 500 }, 2000)
  .add({ targets: ".circle05", translateX: 600 }, 1000);

//function(){return anime.random(number1, number2);} number1 ~ number2 사이의 랜덤값 출력

anime({
  targets: ".commonstyle",
  scale: function (el, i, l) {
    return (i - 2) * 0.2 + 1;
  },
  translateX: function () {
    return anime.random(-60, 60);
  },
  borderRadius: function () {
    return ["50%", anime.random(0, 50) + "%"];
  },
});

//keyframes

anime({
  targets: ".animation1",
  keyframes: [
    {
      translateX: 100,
      rotate: function () {
        return anime.random(0, 360);
        //keyframes 안에서 anime.random 사용하면 새로고침 하기 전까진 같은 값이 나옴
      },
    },
    { translateY: 100 },
    { translateX: -100 },
    { translateY: 200, borderRadius: ["0%", "50%"] },
  ],
  duration: 1000,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});
