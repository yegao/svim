import { NONE, CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function createElement() {
    return document.createElement("g");
}

function G() {
    this.tag = CONTAINER;
    this.element = createElement();
    this.parent = null;
    this.first = null;
    this.last = null;
    this.prev = null;
    this.next = null;
    this.size = 0;
    this.action = NONE;
    this.listeners = [];
}

// 内部元素应用的填充颜色
G.prototype.fill = function(fill) {
    this.element.setAttribute('fill', fill);
    return this;
}

// 内部元素应用的描边颜色
G.prototype.stroke = function(stroke) {
    this.element.setAttribute('stroke', stroke);
    return this;
}

// 内部元素应用的描边宽度
G.prototype.strokeWidth = function(strokeWidth) {
    this.element.setAttribute('strokeWidth', strokeWidth);
    return this;
}

export default enhance(G);