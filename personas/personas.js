var theme = {
  id: "solid-color-",
  name: "Solid Color: ",
  author: "LouCypher",
  category: "Solid",
  accentcolor: null,
  textcolor: null,
  header: "http://zoolcar9.lhukie.net/mozilla/personas/dummy.gif",
  headerURL: "http://zoolcar9.lhukie.net/mozilla/personas/dummy.gif",
  footer: "http://zoolcar9.lhukie.net/mozilla/personas/dummy.gif",
  footerURL: "http://zoolcar9.lhukie.net/mozilla/personas/dummy.gif",
  detailURL: "http://zoolcar9.lhukie.net/mozilla/personas/",
  previewURL: "zoolcar9.lhukie.net/mozilla/personas/preview.jpg"
};

const INSTALL = "InstallBrowserTheme";
const PREVIEW = "PreviewBrowserTheme";
const RESET_PREVIEW = "ResetBrowserThemePreview";

function getColor(id) document.getElementById(id).value

function setTheme(node, action) {
  var accentcolor = getColor("accentcolor");
  theme.id += accentcolor;
  theme.name += accentcolor;
  theme.accentcolor = accentcolor;
  theme.textcolor = getColor("textcolor");
  try {
    node.setAttribute("data-browsertheme", JSON.stringify(theme));
    var event = document.createEvent("Events");
    event.initEvent(action, true, false);
    node.dispatchEvent(event);
  } catch(ex) {
    alert(ex);
  }
}
