import { GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function title(element = document.createElement('title')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(title);
