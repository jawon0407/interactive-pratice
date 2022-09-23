//stagger -> 순차적으로 그 다음 요소가 실행되도록 하는 것
anime({
  targets: ".stagger div",
  rotateX: [
    {
      value: anime.stagger(500, { grid: [12, 6], from: "center", axis: "x" }),
      easing: "easeInOutSine",
      duration: 500,
    },
  ],
  rotateY: [
    {
      value: 200,
      easing: "easeInOutSine",
      duration: 2000,
    },
  ],
  rotateZ: [
    {
      value: "1turn",
      easing: "easeInOutSine",
      duration: 2000,
      delay: 4000,
    },
  ],

  delay: anime.stagger(100, { grid: [12, 6], from: "center" }),
  //grid : [12,6] 12개의 열과 6개의 행으로 나누어서 stagger 적용
});

//순서대로 animation을 적용할 때는 timeline을 사용

anime
  .timeline({
    targets: ".timeline div",
    easing: "easeInOutSine",
    direction: "alternate",
    loop: true,
  })
  .add({
    translateX: 200,
  })
  .add({
    targets: ".one",
    translateX: 400,
  })
  .add(
    {
      targets: ".two",
      translateX: 500,
    },
    "-=200"
  )
  .add({
    targets: ".three",
    translateY: 600,
    rotate: {
      value: anime.random(0, 90),
      duration: 1500,
    },
  })
  .add({
    targets: ".four",
    scale: 2,
  })
  //같은 target한테 animation을 추가로 적용하는 것도 가능, 하지만 해당 animation은 동시에 실행되지 않고 순차적으로 실행됨
  .add({
    targets: ".one",
    translateX: 400,
    translateY: 600,
    rotate: "1turn",
  });
