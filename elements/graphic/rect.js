import { NONE, GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function createElement() {
    return document.createElement('rect');
}

function Rect() {
    this.tag = GRAPHIC;
    this.element = createElement();
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.action = NONE;
}

// 矩形左上角的 x 坐标
Rect.prototype.x = function(x) {
    this.element.setAttribute('x', x);
    return this;
}

// 矩形左上角的 y 坐标
Rect.prototype.y = function(y) {
    this.element.setAttribute('y', y);
    return this;
}

// 矩形的宽度
Rect.prototype.width = function(width) {
    this.element.setAttribute('width', width);
    return this;
}

// 矩形的高度
Rect.prototype.height = function(height) {
    this.element.setAttribute('height', height);
    return this;
}

// 矩形的圆角半径（水平方向）
Rect.prototype.rx = function(rx) {
    this.element.setAttribute('rx', rx);
    return this;
}

// 矩形的圆角半径（垂直方向）
Rect.prototype.ry = function(ry) {
    this.element.setAttribute('ry', ry);
    return this;
}

// 矩形的填充颜色
Rect.prototype.fill = function(fill) {
    this.element.setAttribute('fill', fill);
    return this;
}

// 矩形的描边颜色
Rect.prototype.stroke = function(stroke) {
    this.element.setAttribute('stroke', stroke);
    return this;
}

// 矩形的描边宽度
Rect.prototype.strokeWidth = function(strokeWidth) {
    this.element.setAttribute('strokeWidth', strokeWidth);
    return this;
}

export default enhance(Rect);
