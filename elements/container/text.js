import { CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function Text(element = document.createElement('text')) {
    this.c1 = CONTAINER;
    this.element = element;
}

export default enhance(Text);
