document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");

  checkbox.addEventListener("change", function () {
    menu.classList.add("animate");
  });
});

function revealText(element) {
  var hiddenText = element.querySelector(".hidden-text");
  if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
    hiddenText.style.display = "inline";
  } else {
    hiddenText.style.display = "none";
  }
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
    { threshold: 0.5 }
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
