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

document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("navigation").classList.toggle("dropdown");

  if(document.getElementById("navigation").classList.contains('dropdown')){
    document.getElementById('bookmark').src="./images/logo-bookmark copy 2.svg";
    document.getElementById('burger').src="./images/icon-close.svg";
  }
  else{
    document.getElementById('bookmark').src="./images/logo-bookmark.svg";
    document.getElementById('burger').src="./images/icon-hamburger.svg";
  }
});


const validate = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

document.getElementById('contact-button').addEventListener('click',()=>{
  const input=document.getElementById('user-email').value;
  if(!validate(input)){
    document.getElementsByClassName('input-field')[0].style.border='2px solid var(--soft-red)';
    document.getElementsByClassName('input-field')[0].style.borderRadius='5px 5px 0 0';
    document.getElementById('error-message').style.display='block';
    document.getElementById('error-icon').style.display='block';
  }
  else{
    document.getElementsByClassName('input-field')[0].style.border='2px solid white';
    document.getElementsByClassName('input-field')[0].style.borderRadius='5px';
    document.getElementById('error-message').style.display='none';
    document.getElementById('error-icon').style.display='none';
  }
})