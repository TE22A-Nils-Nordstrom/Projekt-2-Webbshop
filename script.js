let kundvagn = [];
let kundvagnDiv = document.getElementById("kundvagnDiv");

function hej(){
    console.log("ss");
}

function ha(artikel){
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var img = new Image();
    img.src = 'img/taBort.png';
    img.classList.add("kundvagnBild");
    li.appendChild(document.createTextNode(artikel));
    ul.appendChild(li);
    ul.appendChild(img);
    img.addEventListener("click", hej, false);
}

function visaKundvagn(){
    if (kundvagnDiv.style.display === "none") {
        kundvagnDiv.style.display = "block";
      } else {
        kundvagnDiv.style.display = "none";
      }
}