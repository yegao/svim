import { GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function circle(element = document.createElementNS('http://www.w3.org/2000/svg', 'circle')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(circle);
