import { GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function Title(element = document.createElement('title')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(Title);
