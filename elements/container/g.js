import { CONTAINER } from '../../contstant.js';
import enhance from '../../enhance.js';

function g(element = document.createElementNS('http://www.w3.org/2000/svg', "g")) {
    this.c1 = CONTAINER;
    this.element = element;
}

export default enhance(g);