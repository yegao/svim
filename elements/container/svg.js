import { CONTAINER } from '../../contstant.js';
import enhance from '../../enhance.js';

function svg(element = document.createElementNS('http://www.w3.org/2000/svg', "svg")) {
    this.c1 = CONTAINER;
    this.element = element;
}

export default enhance(svg);