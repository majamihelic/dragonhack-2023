//ko kliknes na comic sans gumb, se zgodi funkcija comicsansmessage
document.getElementById('font').addEventListener('change', function comicsansmessage() {
    if (document.getElementById('font').value == "ligma") {
        alert("ligma balls");
    }
    else if(document.getElementById('font').value == "comicsans") {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var aktivenTab = tabs[0];
            chrome.tabs.sendMessage(aktivenTab.id, {message: "comicsansstart"});
        });
    }
    else if(document.getElementById('font').value == "hobostd") {
        alert("hobostd");
    }
});

document.getElementById("bionic").addEventListener("change", function bionic() {
    if (document.getElementById("bionic").checked == true) {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var aktivenTab = tabs[0];
            chrome.tabs.sendMessage(aktivenTab.id, {message: "bionic"});
        });
    }
    else {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var aktivenTab = tabs[0];
            chrome.tabs.sendMessage(aktivenTab.id, {message: "nobionic"});
        });
    }
});



//barva fontov in odzadja
var Sslider = document.getElementById("size");
var SPslider = document.getElementById("spacing");
var LNslider = document.getElementById("line");
var FRslider = document.getElementById("FR");
var FGslider = document.getElementById("FG");
var FBslider = document.getElementById("FB");
var BRslider = document.getElementById("BR");
var BGslider = document.getElementById("BG");
var BBslider = document.getElementById("BB");
Sslider.oninput = function () {
    document.body.style.fontSize = this.value + "px";
    //document.body.style.color = "#" + Number(2 * this.value).toString(16) + "0000";
}
SPslider.oninput = function () {
    document.body.style.letterSpacing = this.value + "px";
}
LNslider.oninput = function () {
    document.body.style.lineHeight = this.value + "px";
}
FRslider.oninput = function () {
    var R = "";
    if (FRslider.value < 16) {
        R = "0"
    }
    R += Number(FRslider.value).toString(16);
    var G = "";
    if (FGslider.value < 16) {
        G = "0"
    }
    G += Number(FGslider.value).toString(16);
    var B = "";
    if (FBslider.value < 16) {
        B = "0"
    }
    B += Number(FBslider.value).toString(16);
    document.body.style.color = "#" + R + G + B;
}
FGslider.oninput = function () {
    var R = "";
    if (FRslider.value < 16) {
        R = "0"
    }
    R += Number(FRslider.value).toString(16);
    var G = "";
    if (FGslider.value < 16) {
        G = "0"
    }
    G += Number(FGslider.value).toString(16);
    var B = "";
    if (FBslider.value < 16) {
        B = "0"
    }
    B += Number(FBslider.value).toString(16);
    document.body.style.color = "#" + R + G + B;
}
FBslider.oninput = function () {
    var R = "";
    if (FRslider.value < 16) {
        R = "0"
    }
    R += Number(FRslider.value).toString(16);
    var G = "";
    if (FGslider.value < 16) {
        G = "0"
    }
    G += Number(FGslider.value).toString(16);
    var B = "";
    if (FBslider.value < 16) {
        B = "0"
    }
    B += Number(FBslider.value).toString(16);
    document.body.style.color = "#" + R + G + B;
}
BRslider.oninput = function () {
    var R = "";
    if (BRslider.value < 16) {
        R = "0"
    }
    R += Number(BRslider.value).toString(16);
    var G = "";
    if (BGslider.value < 16) {
        G = "0"
    }
    G += Number(BGslider.value).toString(16);
    var B = "";
    if (BBslider.value < 16) {
        B = "0"
    }
    B += Number(BBslider.value).toString(16);
    document.body.style.backgroundColor = "#" + R + G + B;
}
BGslider.oninput = function () {
    var R = "";
    if (BRslider.value < 16) {
        R = "0"
    }
    R += Number(BRslider.value).toString(16);
    var G = "";
    if (BGslider.value < 16) {
        G = "0"
    }
    G += Number(BGslider.value).toString(16);
    var B = "";
    if (BBslider.value < 16) {
        B = "0"
    }
    B += Number(BBslider.value).toString(16);
    document.body.style.backgroundColor = "#" + R + G + B;
}
BBslider.oninput = function () {
    var R = "";
    if (BRslider.value < 16) {
        R = "0"
    }
    R += Number(BRslider.value).toString(16);
    var G = "";
    if (BGslider.value < 16) {
        G = "0"
    }
    G += Number(BGslider.value).toString(16);
    var B = "";
    if (BBslider.value < 16) {
        B = "0"
    }
    B += Number(BBslider.value).toString(16);
    document.body.style.backgroundColor = "#" + R + G + B;
}
