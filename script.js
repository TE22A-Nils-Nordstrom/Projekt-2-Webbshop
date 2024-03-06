let kundvagn = [];
let kundvagnDiv = document.getElementById("kundvagnDiv");

function ha(artikel){
    console.log(artikel);
    kundvagn.push(artikel);
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(artikel));
    ul.appendChild(li);
  
}

function visaKundvagn(){
    for(let i = 0; i < kundvagn.length; ++i){
        console.log("item " + (i+1) + ": " + kundvagn[i]);
    }
    
    if (kundvagnDiv.style.display === "none") {
        kundvagnDiv.style.display = "block";
      } else {
        kundvagnDiv.style.display = "none";
      }
}