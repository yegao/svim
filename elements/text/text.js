import { GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function Text(element = document.createElement('text')) {
    this.c1 = GRAPHIC;
    this.element = element;
}

export default enhance(Text);
