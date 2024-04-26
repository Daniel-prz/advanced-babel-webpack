function Hello() {
  const div = document.getElementById("div");
  div.innerHTML = ``;
  const greeting = document.createElement("div");
  greeting.innerHTML = `<p>Hello</p>`;

  div.appendChild(greeting);
}
function Useless() {
  console.log("Unused");
}
module.exports = { Hello, Useless };
