const { write } = require("kolmafia");

function main() {
  write(
    [
      "<html><body>",
      "<script>",
      'window.parent.frames.mainpane.location.href = "/SCRIPTNAME/index.html";',
      "</script>",
      "</body></html>",
      "",
    ].join("\n")
  );
}

module.exports.main = main;
