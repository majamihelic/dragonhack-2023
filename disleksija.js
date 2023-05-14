console.log("evooooyeaaa")

let celobesedilo = String(document.body.innerHTML);

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
        let mesic = request.message.split("_");

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
        else if(request.message === "opendyslexic" ) {
            alert("opendys");
            for(body of document.getElementsByTagName("body")) {
                // div.classList.remove("comicsans") //more removat prejsn dodan class!!!!
                body.classList.add("dyslexie")
            }
            for(span of document.getElementsByTagName("span")) {
                //div.classList.remove("comicsans") //more removat prejsn dodan class!!!!
                span.classList.add("dyslexie")
            }
        }

        //font size
        else if (mesic[0] === "ss") {
            document.body.style.fontSize = mesic[1] + "px";
        }
        //spacing
        else if (mesic[0] === "sp") {
            document.body.style.letterSpacing = mesic[1] + "px";
        }
        //line spacing
        else if (mesic[0] === "ln") {
            document.body.style.lineHeight = mesic[1] + "px";
        }

        else if (mesic[0] === "fc") {
            //alert(mesic[1]);
            document.body.style.color = mesic[1];
        }

        else if (mesic[0] === "bc") {
            document.body.style.backgroundColor = mesic[1];
            for (div of document.getElementsByTagName("div")) {
                div.style.backgroundColor = mesic[1];
            }
            for (span of document.getElementsByTagName("span")) {
                span.style.backgroundColor = mesic[1];
            }
            for (p of document.getElementsByTagName("p")) {
                p.style.backgroundColor = mesic[1];
            }
            //alert(mesic[1]);
        }

        //ozadje
        else if(request.message === "ozadjekrem" ) {
            document.body.style.backgroundColor = "#f9f9d2";
            for(p of document.getElementsByTagName("p")) {
                p.style.backgroundColor = "#f9f9d2";
            }
            for(div of document.getElementsByTagName("div")) {
                div.style.backgroundColor = "#f9f9d2";
            }
            for(span of document.getElementsByTagName("span")) {
                span.style.backgroundColor = "#f9f9d2";
            }
        }
        else if(request.message === "ozadjebelo" ) {
            document.body.style.backgroundColor = "white";
            for(p of document.getElementsByTagName("p")) {
                p.style.backgroundColor = "white";
            }
            for(div of document.getElementsByTagName("div")) {
                div.style.backgroundColor = "white";
            }
            for(span of document.getElementsByTagName("span")) {
                span.style.backgroundColor = "white";
            }
        }
        else if(request.message === "ozadjecrno" ) {
            document.body.style.backgroundColor = "black";
            for(p of document.getElementsByTagName("p")) {
                p.style.backgroundColor = "black";
            }
            for(div of document.getElementsByTagName("div")) {
                div.style.backgroundColor = "black";
            }
            for(span of document.getElementsByTagName("span")) {
                span.style.backgroundColor = "black";
            }
        }
        else if(request.message === "fontbela" ) {
            document.body.style.color = "white";
        }
        else if(request.message === "fontcrna" ) {
            document.body.style.color = "black";
        }
        else if(request.message === "fonttmodra" ) {
            document.body.style.color = "#000099";
        }

        //bionic reading
        else if(request.message === "bionic") {
            for(p of document.getElementsByTagName("p")) {
                p.innerHTML = bionic(p.innerHTML);             }
            for(span of document.getElementsByTagName("span")) {
                document.body = bionic(document.body);
            }
        }
        else if (request.message === "nobionic") {
            document.body.innerHTML = celobesedilo;
        }
    }
);