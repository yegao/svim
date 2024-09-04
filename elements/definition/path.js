import { DEFINITION } from '../../contstant';
import enhance from '../../enhance';

function path(element = document.createElementNS('http://www.w3.org/2000/svg', "path")) {
    this.c1 = DEFINITION;
    this.element = element;
}

export default enhance(path);