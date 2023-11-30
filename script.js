window.onload = function () {
  document.body.style.overflow = "auto";
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".main_wrapper_first_img__big")
    .classList.add("animate-big");
  document
    .querySelector(".main_wrapper_first_img__small")
    .classList.add("animate-small");

  var checkbox = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var clickCount = 0;

  checkbox.addEventListener("change", function () {
    clickCount++;

    if (clickCount == 2) {
      menu.classList.toggle("animate");
    }
  });
});

function revealText(element) {
  var hiddenText = element.querySelector(".collapse");
  hiddenText.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll(".my-video");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target;

        if (entry.isIntersecting) {
          video.play();
        } else {
          // Видео не видно, выключаем его
          video.pause();
        }
      });
    },
    { threshold: 0.77 }
  );

  videos.forEach(function (video) {
    observer.observe(video);
  });

  // Обработчик события изменения видимости документа
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      // Документ стал невидимым, поэтому выключаем все видео
      videos.forEach(function (video) {
        video.pause();
      });
    } else {
      // Документ стал видимым, проверяем, если видео в зоне видимости, и включаем их
      videos.forEach(function (video) {
        var videoContainerRect = video.getBoundingClientRect();
        if (
          videoContainerRect.top < window.innerHeight &&
          videoContainerRect.bottom >= 0
        ) {
          video.play();
        }
      });
    }
  });
});

function changeSize(element) {
  var hiddenText = element.querySelector(".hidden-text-new");

  // Используем атрибут данных для хранения состояния
  var isIncreased = element.getAttribute("data-increased") === "true";

  // Переключаемся между увеличением и уменьшением размеров
  if (isIncreased) {
    element.style.width = 12 + "vw";
    element.style.height = 12 + "vw";
    hiddenText.style.display = "none"; // Скрываем текст при уменьшении
  } else {
    element.style.width = 22 + "vw";
    element.style.height = 22 + "vw";
    hiddenText.style.display = "block"; // Показываем текст при увеличении
  }

  // Инвертируем состояние и обновляем атрибут данных
  element.setAttribute("data-increased", !isIncreased);
}

const answer = document.getElementById("answer");
const countdownElement = document.getElementById("countdown");
let click;
function startCountdown() {
  answer.textContent = "";

  const timerElement = document.getElementById("timer");
  const buttonElement = document.querySelector("button");
  timerElement.textContent = "30.00";
  click = 0;
  let countdown = 3;

  countdownElement.textContent = countdown;
  counter.textContent = click;
  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown === 0) {
      clickbutton.disabled = false;
      clearInterval(countdownInterval);

      countdownElement.textContent = "START";
      timerElement.style.display = "block";
      startTimer();
    }
  }, 1000);

  buttonElement.disabled = true;
}

const clickbutton = document.getElementById("click_button");
const counter = document.getElementById("counter");

function startTimer() {
  const timerElement = document.getElementById("timer");

  clickbutton.disabled = false;
  let timeLeft = 30;
  timerElement.textContent = timeLeft.toFixed(2);
  clickbutton.addEventListener("click", function () {
    if (clickbutton.disabled == false) click++;
    counter.textContent = click;
  });
  const timerInterval = setInterval(() => {
    timeLeft -= 0.01;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      timerElement.textContent = (-timeLeft).toFixed(2);
      document.querySelector("button").disabled = false;
      clickbutton.disabled = true;
      if (click < 180)
        answer.textContent = "Молодец, но нужно еще потренироваться";
      else if (click <= 205)
        answer.textContent =
          "Результат, но я думаю, что для тебя это не предел";
      else if (click > 205)
        answer.textContent =
          "Ты гений, из тебя получится отличный киберспортсмен";
      countdownElement.textContent = "TIMER";
    } else {
      timerElement.textContent = timeLeft.toFixed(2);
    }
  }, 10);
}
