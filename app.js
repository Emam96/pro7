let img = document.getElementById("ob");

let imgFile = ["ballon.png", "bekind.png", "pizza.png", "jake.png", "skull.png"];
let imgs = [];

function Img(name) {
  this.imgName = name.split(".")[0];
  this.filePath = name;
  imgs.push(this);
}

for (let i = 0; i < imgFile.length; i++) {
  // object maker
  new Img(imgFile[i]);
}

// console.log(imgs);

function render() {
  for (let i = 0; i < imgs.length; i++) {
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/" + imgs[i].filePath);
    imgEl.setAttribute("class", "item");
    imgEl.setAttribute("width", "200px");
    imgEl.setAttribute("id", imgs[i].imgName);

    img.appendChild(imgEl);
  }
}

render();

let imgEl = document.querySelectorAll(".item");


imgEl.forEach(imgEl => {
  imgEl.addEventListener('click', goToCstmPage);
});


function goToCstmPage(event) {
  console.log("clicked");
  let codedData = JSON.stringify(event.target.src.slice(30, 45));
  localStorage.setItem("data", codedData);
  location.href = "shirt.html";
  imgEl.removeEventListener("click", goToCstmPage);
}

// imgEl.addEventListener('click', goToCstmPage);
