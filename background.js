
chrome.browserAction.onClicked.addListener(async function(tab){
    await chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var activeTabe = tabs[0];
        chrome.tabs.sendMessage(activeTabe.id, {"message": "click on icon"})
        chrome.tabs.executeScript(null,{
            file: 'content.js'
        })
    })
})