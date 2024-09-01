import { CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function svg(element = document.createElementNS('http://www.w3.org/2000/svg', "svg")) {
    this.c1 = CONTAINER;
    this.element = element;
}

export default enhance(svg);