function go(aEvent) {
  var node = aEvent.target;
  var url = node.getAttribute("href");
  if (node.hasAttribute("target")) {
    open(url, node.getAttribute("target"));
  } else {
    location.href = url;
  }
}