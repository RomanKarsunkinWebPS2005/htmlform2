import { Popover } from './popover';

// TODO: write code here

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("popover-btn");
  const popover = new Popover(
    "Popover title",
    "And here's some amazing content. It's very engaging. Right?",
  );
  let isShown = false;

  btn.addEventListener("click", () => {
    if (!isShown) {
      popover.show(btn);
      isShown = true;
    } else {
      popover.hide();
      isShown = false;
    }
  });
});
