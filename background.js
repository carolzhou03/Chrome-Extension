var NOTIFICATION_ID = "Motivational Quote";
var QUOTE_INTERVAL = 1;

chrome.alarms.create('QUOTE_ALARM', {
    periodInMinutes: QUOTE_INTERVAL
});

chrome.alarms.onAlarm.addListener((alarm)=> {
    if (alarm.name === 'QUOTE_ALARM') {
        chrome.notifications.create("QUOTE_NOTIF", {
            "type": "basic",
            "iconUrl": chrome.runtime.getURL("icon.png"),
            "title": "Motivational Quote, Just for You",
            "message": "yes very motivational ~~"
        });
    }
});
  
chrome.action.onClicked.addListener(()=> {
    var clearing = chrome.notifications.clear("QUOTE_NOTIF");
    clearing.then(() => {
        console.log("cleared");
    });
});
  