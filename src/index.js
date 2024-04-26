const { Useless } = require("./module1.js");

const button = document.getElementById("gg");
button.addEventListener("click", () => {
  import("./module1.js").then((module) => {
    module.Hello();
  });
});
