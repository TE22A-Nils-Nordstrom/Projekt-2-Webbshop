let kundvagn = [];

function ha(artikel){
    console.log(artikel);
    kundvagn.push(artikel);
}

function visaKundvagn(){
    for(let i = 0; i < kundvagn.length; ++i){
        console.log("item " + (i+1) + ": " + kundvagn[i]);
    }
}