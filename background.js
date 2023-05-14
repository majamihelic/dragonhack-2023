console.log("look alive sunshine")

chrome.runtime.onInstalled.addListener(() => {
    console.log("to je ns background script");
});



//v stran vstavi stil.css script vsakic, ko se stran do konca nalozi
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
        chrome.scripting.insertCSS({
            target: {tabId: tabId},
            files: ["disleksija.css"]
        })
            //sporoci, ce je uspelo
            .then(() => {
                console.log("disleksija.css se je nalozil");

                chrome.scripting.executeScript({
                    target: {tabId: tabId},
                    files: ["disleksija.js"]
                })
                    .then(() => {
                        console.log("disleksija.css se je nalozil");
                    })
            })
            .catch(err => console.log(err));

    };
});



/*
chrome.runtime.sendMessage() poslje sporocilo na background/popup
chrome.tabs.sendMessage() poslje samo disleksija.js
*/


