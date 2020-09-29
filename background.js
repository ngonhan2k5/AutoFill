var sMenuExeId = "cm_execute",
    handleMenu = function (info, tab) {
        console.log(222, this, arguments);

        // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tab.id, "aa");
        // });

        // chrome.tabs.executeScript(tab.id, {file: "getDOM.js"})
    },
    _keywords = ['industry', 'benefit', 'c2c', 'remote', 'citizen']
chrome.contextMenus.onClicked.addListener(handleMenu);

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("The color is green.");
    });

    chrome.storage.sync.set({ keywords: _keywords}, function () {
        console.log("Install: default kw set");
    });

    chrome.contextMenus.create({
        id: sMenuExeId,
        "title": "Buzz This",
        // "contexts": ["page", "selection", "image", "link"],
        "contexts": ["editable"],
        // "onclick" : handleMenu
    });
})


chrome.runtime.onStartup.addListener(function () {
    chrome.contextMenus.removeAll();


    chrome.contextMenus.create({
        id: sMenuExeId,
        contexts: "all",
        title: "generalExecute"
    });


    // chrome.contextMenus.create({
    //   id: sMenuExeId,
    //   contexts: "all",
    //   title: "generalExecute"
    // });


    console.log(111)
});


// console.log("background running");
// chrome.browserAction.onClicked.addListener(setup);
// function setup() {
//     noCanvas();
//     let userinput = select('#userinput');
//     userinput.input(sendText);
//     function sendText() {
//         //Value got from input field in popup
//         let message = userinput.value();
//         //Sending message to content
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, message);
//         });
//     }
// }

handleNavigation = function (tab) {
    console.log(222, arguments);

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        tabs && tabs.length && chrome.tabs.sendMessage(tabs[0].id, {type:"navi"});
    });

    // chrome.tabs.executeScript(tab.id, {file: "getDOM.js"})
}
// chrome.webNavigation.onCommitted.addListener(handleNavigation);
chrome.webNavigation.onHistoryStateUpdated.addListener(handleNavigation);


chrome.runtime.onMessage.addListener(handleMessage);

function handleMessage(n, t, i) {
    console.log('request message received', n, t)
    // var u, r, f;
    switch (n.type) {
        case "config":
            console.log(n, t)
            i(_keywords)
            break;
        
        case "keyword":
            if (n.keywords){
                _keywords = n.keywords
                chrome.storage.sync.set({ keywords: _keywords}, function () {
                    console.log("Change kw set", _keywords);
                });
            }else{
                console.log("Can not change kw config")
            }
            break;
        default:
            i()
    }
    

}