import { CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function g(element = document.createElement("g")) {
    this.c1 = CONTAINER;
    this.element = element;
}

export default enhance(g);