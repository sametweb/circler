window.addEventListener("click", function() {
  let welcome = document.querySelector("#welcome");
  let body = document.querySelector("body");
  welcome ? body.removeChild(welcome) : true;
});

function createCircle() {
  return function() {
    let randomSize = `${Math.floor((Math.random() * window.innerWidth) / 10)}`;

    let randomColor = `rgba(
      ${Math.floor(Math.random() * 255)}, 
      ${Math.floor(Math.random() * 255)}, 
      ${Math.floor(Math.random() * 255)}, 
      1
    )`;

    let mouseX = event.clientX;
    let mouseY = event.clientY;

    let body = document.querySelector("body");
    let circle = document.createElement("div");

    circle.className = "circle";
    circle.style.width = circle.style.height = `${randomSize}px`;
    circle.style.left = `${mouseX - randomSize / 2}px`;
    circle.style.top = `${mouseY - randomSize / 2}px`;
    circle.style.background = randomColor;

    body.prepend(circle);
  };
}

window.addEventListener("click", event => createCircle()());
let goLeft = [];
let goTop = [];

setInterval(function() {
  let allCircles = document.querySelectorAll(".circle");

  allCircles.forEach((item, index) => {
    if (item.offsetLeft < 1) {
      goLeft[index] = false;
      item.style.background = `rgba(
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        1
      )`;
      item.style.left = "1px";
    } else if (item.offsetLeft > window.innerWidth - item.clientWidth - 1) {
      goLeft[index] = true;
      item.style.background = `rgba(
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        1
      )`;
      item.style.left = `${window.innerWidth - item.clientWidth - 1}px`;
    }
    if (item.offsetTop < 1) {
      goTop[index] = false;
      item.style.background = `rgba(
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        1
      )`;
      item.style.top = "1px";
    } else if (item.offsetTop > window.innerHeight - item.clientWidth - 1) {
      goTop[index] = true;
      item.style.background = `rgba(
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        1
      )`;
      item.style.top = `${window.innerHeight - item.clientWidth - 1}px`;
    }

    item.style.left = goLeft[index]
      ? `${item.offsetLeft - 1}px`
      : `${item.offsetLeft + 1}px`;
    item.style.top = goTop[index]
      ? `${item.offsetTop - 1}px`
      : `${item.offsetTop + 1}px`;
  });
}, 1);
