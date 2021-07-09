let iconPlace = document.getElementById("closet");

iconPlace.addEventListener("click", placeIcon);

function placeIcon() {
  let retryData = localStorage.getItem("data");
  let decodedData = JSON.parse(retryData);
  console.log(decodedData);
  let idName = decodedData.split(".")[0];
  if (decodedData !== null) {
    let newIcon = document.createElement("img");
    newIcon.setAttribute("src", "images/" + decodedData);
    newIcon.setAttribute("class", "icon");

    iconPlace.appendChild(newIcon);
  }
  iconPlace.removeEventListener("click", placeIcon);
}
// iconPlace.onload = placeIcon;
