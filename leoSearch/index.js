var self = require("sdk/self");
var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");

var leoMenuItem = contextMenu.Item({
  label: "Leo English <-> German",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
	var searchUrl = "http://dict.leo.org/ende/index_de.html#/search=" + selectionText + "&searchLoc=0&resultOrder=basic&multiwordShowSingle=on";
    tabs.open(searchUrl);
  }
});