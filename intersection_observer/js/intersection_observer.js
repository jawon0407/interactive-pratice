const options = {
  threshold: 0,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("red");
      entry.target.style.color = "blue";
      console.log(entry.target);
      console.log(observer);
      console.log(window.screenY, window.screenX);
    } else {
      entry.target.classList.remove("red");
      entry.target.style.color = "black";
      observer.unobserve;
    }
  });
}, options);

const cards = document.querySelectorAll(".card");
cards.forEach((li) => {
  //forEach에 들어가는 변수의 이름은 상관없음
  observer.observe(li);
});
