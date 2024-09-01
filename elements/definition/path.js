import { DEFINITION } from '../../contstant';
import enhance from '../../enhance';

function path(element = document.createElement("path")) {
    this.c1 = DEFINITION;
    this.element = element;
}

export default enhance(path);