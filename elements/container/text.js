import { CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function Text(element = document.createElementNS('http://www.w3.org/2000/svg', 'text')) {
    this.c1 = CONTAINER;
    this.element = element;
}

export default enhance(Text);
