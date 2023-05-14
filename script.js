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
    else if(document.getElementById('font').value == "opendyslexic") {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
            var aktivenTab = tabs[0];
            chrome.tabs.sendMessage(aktivenTab.id, {message: "opendyslexic"});
        });
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


//FONT SEM DODALA ZDAJ
document.getElementById("belaf").addEventListener("click", function fontbela() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        document.getElementById("FR").value = 255;
        document.getElementById("FG").value = 255;
        document.getElementById("FB").value = 255;
        chrome.tabs.sendMessage(aktivenTab.id, {message: "fontbela"});
    });
});
document.getElementById("crnaf").addEventListener("click", function fontcrna() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        document.getElementById("FR").value = 0;
        document.getElementById("FG").value = 0;
        document.getElementById("FB").value = 0;
        chrome.tabs.sendMessage(aktivenTab.id, {message: "fontcrna"});
    });
});
document.getElementById("tmodraf").addEventListener("click", function fonttmodra() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        document.getElementById("FR").value = 0;
        document.getElementById("FG").value = 0;
        document.getElementById("FB").value = 153;
        chrome.tabs.sendMessage(aktivenTab.id, {message: "fonttmodra"});
    });
});

//ozadje
document.getElementById("krem").addEventListener("click", function ozadjekrem() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        document.getElementById("BR").value = 249;
        document.getElementById("BG").value = 249;
        document.getElementById("BB").value = 210;
        chrome.tabs.sendMessage(aktivenTab.id, {message: "ozadjekrem"});
    });
});

document.getElementById("bela").addEventListener("click", function ozadjebelo() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        document.getElementById("BR").value = 255;
        document.getElementById("BG").value = 255;
        document.getElementById("BB").value = 255;
        chrome.tabs.sendMessage(aktivenTab.id, {message: "ozadjebelo"});
    });
});

document.getElementById("crna").addEventListener("click", function ozadjecrno() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        document.getElementById("BR").value = 0;
        document.getElementById("BG").value = 0;
        document.getElementById("BB").value = 0;
        chrome.tabs.sendMessage(aktivenTab.id, {message: "ozadjecrno"});
    });
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
    //document.body.style.fontSize = this.value + "px";
    let ssslidervalue = "ss_" + String(Number(this.value));
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        chrome.tabs.sendMessage(aktivenTab.id, {message: ssslidervalue});
    });
}
SPslider.oninput = function () {
    //document.body.style.letterSpacing = this.value + "px";
    let spslidervalue = "sp_" + String(Number(this.value));
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        chrome.tabs.sendMessage(aktivenTab.id, {message: spslidervalue});
    });
}
LNslider.oninput = function () {
    //document.body.style.lineHeight = this.value + "px";
    let lnslidervalue = "ln_" + String(Number(this.value));
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        chrome.tabs.sendMessage(aktivenTab.id, {message: lnslidervalue});
    });
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
    val = "fc_#" + R + G + B;
    //alert(val);
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        chrome.tabs.sendMessage(aktivenTab.id, {message: val});
    });
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
    val = "fc_#" + R + G + B;
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        chrome.tabs.sendMessage(aktivenTab.id, {message: val});
    });
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
    val = "fc_#" + R + G + B;
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        chrome.tabs.sendMessage(aktivenTab.id, {message: val});
    });
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
    val = "bc_#" + R + G + B;
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        chrome.tabs.sendMessage(aktivenTab.id, {message: val});
    });
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
    val = "bc_#" + R + G + B;
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        chrome.tabs.sendMessage(aktivenTab.id, {message: val});
    });
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
    val = "bc_#" + R + G + B;
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var aktivenTab = tabs[0];
        chrome.tabs.sendMessage(aktivenTab.id, {message: val});
    });
}
