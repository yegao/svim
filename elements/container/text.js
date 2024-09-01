import { CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function Text(element = document.createElement('text'), content) {
    this.c1 = CONTAINER;
    this.element = element;
    this.element.innerText = content;
}

export default enhance(Text);
