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

window.onload = function () {
  document.body.style.overflow = "auto";
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};
