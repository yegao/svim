import { CONTAINER } from '../../contstant.js';
import enhance from '../../enhance.js';

function tspan(element = document.createElementNS('http://www.w3.org/2000/svg', 'tspan')) {
    this.c1 = CONTAINER;
    this.element = element;
}

export default enhance(tspan);
