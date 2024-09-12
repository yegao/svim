import { GRAPHIC } from '../../contstant.js';
import enhance from '../../enhance.js';

function rect(element = document.createElementNS('http://www.w3.org/2000/svg', 'rect')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(rect);
