import { GRAPHIC } from '../../contstant.js';
import enhance from '../../enhance.js';

function circle(element = document.createElementNS('http://www.w3.org/2000/svg', 'circle')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(circle);
