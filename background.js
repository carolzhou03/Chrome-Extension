var NOTIFICATION_ID = "Motivational Quote";
var QUOTE_INTERVAL = 1;

chrome.runtime.onInstalled.addListener(() => {
    console.log("onInstalled...");
  
    // create alarm after extension is installed / upgraded
    
});  

chrome.alarms.create('QUOTE_ALARM', {
    periodInMinutes: QUOTE_INTERVAL
});

chrome.alarms.onAlarm.addListener((alarm)=> {
    if (alarm.name === 'QUOTE_ALARM') {
        chrome.notifications.create("QUOTE_NOTIF", {
            "type": "basic",
            "iconUrl": chrome.runtime.getURL("128.png"),
            "title": "Motivational Quote, Just for You",
            "message": "Insert Quote Here"
        });
    }
});
  
chrome.action.onClicked.addListener(()=> {
    var clearing = chrome.notifications.clear("QUOTE_NOTIF");
    clearing.then(() => {
        console.log("cleared");
    });
});
  
async function startRequest() {
}