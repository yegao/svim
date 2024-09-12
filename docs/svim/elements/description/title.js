import { GRAPHIC } from '../../contstant.js';
import enhance from '../../enhance.js';

function title(element = document.createElementNS('http://www.w3.org/2000/svg', 'title')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(title);
