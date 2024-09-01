import { GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function content(element = new Text()) {
    this.c1 = GRAPHIC;
    this.element = element;
}

export default enhance(content);
