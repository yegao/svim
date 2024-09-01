import { CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function G(element = document.createElement("g")) {
    this.c1 = CONTAINER;
    this.element = element;
}

export default enhance(G);