import { GRAPHIC } from '../../contstant.js';
import enhance from '../../enhance.js';

function content(element = new Text()) {
    this.c1 = GRAPHIC;
    this.element = element;
}

export default enhance(content);
