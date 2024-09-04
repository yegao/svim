import { CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function textPath(element = document.createElementNS('http://www.w3.org/2000/svg', 'textPath')) {
    this.c1 = CONTAINER;
    this.element = element;
}

export default enhance(textPath);
