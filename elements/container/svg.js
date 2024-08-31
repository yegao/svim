import { NONE, CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function createElement(namespace = 'http://www.w3.org/2000/svg') {
    return document.createElementNS(namespace, "svg");
}

function Svg(options = {namespace: 'http://www.w3.org/2000/svg'}) {
    this.tag = CONTAINER;
    if (options.element) {
        this.element = options.element;
    } else {
        this.element = createElement(options.namespace);
    }
    this.parent = null;
    this.first = null;
    this.last = null;
    this.prev = null;
    this.next = null;
    this.size = 0;
    this.action = NONE;
}

Svg.prototype.width = function(width) {
    this.element.setAttribute('width', width);
    return this;
}

Svg.prototype.height = function(height) {
    this.element.setAttribute('height', height);
    return this;
}

Svg.prototype.viewBox = function(x, y, width, height, preserveAspectRatio = 'xMidYMid meet') {
    this.element.setAttribute('viewBox', [x, y, width, height].join(','));
    if (preserveAspectRatio !== 'xMidYMid meet') {
        this.element.setAttribute('preserveAspectRatio', preserveAspectRatio);
    }
    return this;
}

export default enhance(Svg);