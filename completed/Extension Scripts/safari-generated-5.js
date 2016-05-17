document.addEventListener("keydown", function(e) {
    if (testShortcut(e, {
        "altKey": true,
        "metaKey": false,
        "shiftKey": false,
        "ctrlKey": false,
        "type": "keydown",
        "keyIdentifier": "U+002C"
    }))
        safari.self.tab.dispatchMessage("showSettings", "");
}, false);
