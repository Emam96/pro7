let img = document.getElementById("ob");

let imgFile = ["ballon.png", "bekind.png", "pizza.png"];
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
    imgEl.setAttribute("width", "100px");
    imgEl.setAttribute("id", imgs[i].imgName);

    img.appendChild(imgEl);
  }
}

render();

let imgEl = document.querySelector(".item");

function goToCstmPage() {
  console.log("clicked");
  let codedData = JSON.stringify(imgs[0].filePath);
  localStorage.setItem("data", codedData);
}

imgEl.onclick = goToCstmPage;
