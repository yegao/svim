import { GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function metadata(element = document.createElementNS('http://www.w3.org/2000/svg', 'metadata')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(metadata);
