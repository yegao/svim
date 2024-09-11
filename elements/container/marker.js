import { CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function marker(element = document.createElementNS('http://www.w3.org/2000/svg', "marker")) {
    this.c1 = CONTAINER;
    this.element = element;
    this.shapes = [];
}

export default enhance(marker);