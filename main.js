let show = 0;

document.getElementById("simple").addEventListener("click", () => {
  show = 0;
  hide();
});

document.getElementById("speedy").addEventListener("click", () => {
  show = 1;
  hide();
});

document.getElementById("easy").addEventListener("click", () => {
  show = 2;
  hide();
});

const hide = () => {
  let features = document.getElementsByClassName("feature");
  let items = document.getElementsByClassName("menu-item");
  features[show].classList.add("show");
  items[show].classList.add("active");
  for (let i = 0; i < features.length; i++) {
    if (i != show) {
      features[i].classList.remove("show");
      items[i].classList.remove("active");
    }
  }
};

hide();

let questions = document.getElementsByClassName("question");

const showAnswer = (index) => {
  let answers = document.getElementsByClassName("a");
  for (let i = 0; i < answers.length; i++) {
    if (i != index) questions[i].classList.remove("show-answer");
  }

  questions[index].classList.toggle("show-answer");
};

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => showAnswer(i));
}
