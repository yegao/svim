import { CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function tspan(element = document.createElementNS('http://www.w3.org/2000/svg', 'tspan')) {
    this.c1 = CONTAINER;
    this.element = element;
}

export default enhance(tspan);
