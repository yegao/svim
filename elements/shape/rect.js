import { GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function rect(element = document.createElement('rect')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(rect);
