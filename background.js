
chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.executeScript(null,{
           file: 'content.js'
       })
    })
})