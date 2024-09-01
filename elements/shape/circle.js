import { GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function circle(element = document.createElement('circle')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(circle);
