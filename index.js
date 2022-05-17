const loadText = document.querySelector(".loading-text");
const backgroundImage = document.querySelector(".back");

let load = 0;

let int = setInterval(blurLoad, 40);

function blurLoad() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `Loading ${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  backgroundImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

};
