console.log('background script running');
chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.executeScript(null,{
        file: 'content.js'
    })
})