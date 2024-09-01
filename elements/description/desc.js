import { GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function desc(element = document.createElement('desc')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(desc);
