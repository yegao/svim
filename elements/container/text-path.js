import { CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function TextPath(element = document.createElement('textPath'), content) {
    this.c1 = CONTAINER;
    this.element = element;
    this.element.innerText = content;
}

export default enhance(TextPath);
