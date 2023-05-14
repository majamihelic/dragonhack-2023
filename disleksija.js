console.log("evooooyeaaa")

document.body.innerHTML = String(document.body.innerHTML);

function bionic(str){
    let stri = str.replace(/<\/?[^>]+(>|$)/g, "");
    let beseda = stri.split(" ");
    let bold = [];
    for (let i = 0; i < beseda.length; i++) {
        let crke = "";
        for (let j = 0; j < beseda[i].length / 2; j++) {
            crke += beseda[i][j];
        }
        let ostalo = beseda[i].slice(crke.length);
        let koncna = "<b>" + crke + "</b>" + ostalo;
        bold.push(koncna);
    }
    return bold.join(" ");
};

function nobionic(str){

};

chrome.runtime.onMessage.addListener(
    function(request) {
        //spremeni font
        if(request.message === "comicsansstart" ) {
            for(body of document.getElementsByTagName("body")) {
               // div.classList.remove("") //more removat prejsn dodan class!!!!
                body.classList.add("comicsans")
            }
            for(span of document.getElementsByTagName("span")) {
                // div.classList.remove("") //more removat prejsn dodan class!!!!
                span.classList.add("comicsans")
            }
        }

        //bionic reading
        else if(request.message === "bionic") {
            alert("bionicli");
            for(p of document.getElementsByTagName("p")) {
                p.innerHTML = bionic(p.innerHTML);             }
            for(span of document.getElementsByTagName("span")) {
                document.body = bionic(document.body);
            }
        }
        else if (request.message === "nobionic") {
            alert("nobionic")
        }
    }
);



/*
function bionic(str){
    let stri = str.replace(/<\/?[^>]+(>|$)/g, "");
    let beseda = stri.split(" ");
    let bold = [];
    for (let i = 0; i < beseda.length; i++) {
        let crke = "";
        for (let j = 0; j < beseda[i].length / 2; j++) {
            crke += beseda[i][j];
        }
        let ostalo = beseda[i].slice(crke.length);
        let koncna = "<b>" + crke + "</b>" + ostalo;
        bold.push(koncna);
    }
    return bold.join(" ");
}


/*
//prejme sporocilo 
chrome.runtime.onMessage.addListener(
    function(request) {
        if(request.message === "comicsansstart" ) {
            comicsans();
        }
    }
);

//fonti
function comicsans(){
    alert("comic sans")
    for(div of document.getElementsByTagName("div")) {
        div.classList.remove("") //more removat prejsn dodan class!!!!
        div.classList.add("comicsans")
    }
}
*/


