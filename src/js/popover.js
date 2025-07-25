class Popover {
  constructor(title, content, doc = document, win = window) {
    this.title = title;
    this.content = content;
    this.popover = null;
    this.document = doc;
    this.window = win;
  }

  createPopover() {
    const popover = this.document.createElement("div");
    popover.className = "popover";
    popover.style.position = "absolute";
    popover.style.zIndex = "1000";
    popover.innerHTML = `
      <div class="popover-header">${this.title}</div>
      <div class="popover-body">${this.content}</div>
    `;
    this.document.body.appendChild(popover);
    this.popover = popover;
  }

  setPosition(target) {
    if (!this.popover) return;
    const targetRect = target.getBoundingClientRect();
    const popoverRect = this.popover.getBoundingClientRect();
    const top = this.window.scrollY + targetRect.top - popoverRect.height - 8;
    const left = this.window.scrollX + targetRect.left + (targetRect.width - popoverRect.width) / 2;
    this.popover.style.top = `${top}px`;
    this.popover.style.left = `${left}px`;
  }

  show(target) {
    if (!this.popover) {
      this.createPopover();
    }
    // Временно делаем видимым для корректного расчёта размеров
    this.popover.style.display = "block";
    this.setPosition(target);
    this.popover.style.display = "block";
  }

  hide() {
    if (this.popover) {
      this.popover.style.display = "none";
    }
  }

  remove() {
    if (this.popover) {
      this.popover.remove();
      this.popover = null;
    }
  }
}

module.exports = { Popover }; 