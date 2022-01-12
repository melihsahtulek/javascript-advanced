let second = 5;
const secondSpan = document.querySelector("#seconds");
secondSpan.innerHTML = second;
const dowBtn = document.querySelector("#dowBtn");
let timer = null;

const checkSecond = () => {
  if (second > 1) {
    second--;
    secondSpan.innerHTML = second;
  } else {
    clearInterval(timer);
    alert("hello :)");
  }
};

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    timer = setInterval(checkSecond, 1000);
  } else {
    clearInterval(timer);
  }
});

dowBtn.addEventListener("click", () => (timer = setInterval(checkSecond, 1000)));
