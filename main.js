import "./style.css";
import viteLogo from "/logo.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
  <img src="${viteLogo}" class="logo" alt="Vite logo" />
    <h1>maintenance!</h1>
  </div>
`;

setupCounter(document.querySelector("#counter"));
