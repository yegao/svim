import { GRAPHIC } from '../../contstant.js';
import enhance from '../../enhance.js';

function desc(element = document.createElementNS('http://www.w3.org/2000/svg', 'desc')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(desc);
