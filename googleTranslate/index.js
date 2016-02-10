var self = require("sdk/self");
var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");

var leoMenuItem = contextMenu.Item({
  label: "Google Translate German -> English",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
	var searchUrl = "https://translate.google.com/#de/en/" + selectionText;
    tabs.open(searchUrl);
  }
});