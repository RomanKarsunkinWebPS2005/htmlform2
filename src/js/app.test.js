global.TextEncoder = global.TextEncoder || require('util').TextEncoder;
global.TextDecoder = global.TextDecoder || require('util').TextDecoder;

const { JSDOM } = require("jsdom");
const { Popover } = require('./popover');

describe("Popover", () => {
  let window, document, btn;

  beforeEach(() => {
    const dom = new JSDOM(
      `<!DOCTYPE html><body><button id="popover-btn">Click</button></body>`,
      { runScripts: "dangerously" },
    );
    window = dom.window;
    document = window.document;
    btn = document.getElementById("popover-btn");
  });

  test("popover создается и отображается", () => {
    const popover = new Popover("Заголовок", "Текст", document, window);
    popover.show(btn);
    const popoverEl = document.querySelector(".popover");
    expect(popoverEl).not.toBeNull();
    expect(popoverEl.querySelector(".popover-header").textContent).toBe(
      "Заголовок",
    );
    expect(popoverEl.querySelector(".popover-body").textContent).toBe("Текст");
    expect(popoverEl.style.display).toBe("block");
  });

  test("popover скрывается", () => {
    const popover = new Popover("Заголовок", "Текст", document, window);
    popover.show(btn);
    popover.hide();
    const popoverEl = document.querySelector(".popover");
    expect(popoverEl.style.display).toBe("none");
  });
});
