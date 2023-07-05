import "./styles.css";

const body = document.querySelector("body");
//body.style.backgroundColor = "yellow";
const button = document.querySelector("button");
// button.style.backgroundColor = "red";

button.addEventListener("click", () => (button.style.backgroundColor = "pink"));
