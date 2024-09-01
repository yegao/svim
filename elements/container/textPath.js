import { CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function textPath(element = document.createElement('textPath')) {
    this.c1 = CONTAINER;
    this.element = element;
}

export default enhance(textPath);
