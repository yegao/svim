import { GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function metadata(element = document.createElement('metadata')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(metadata);
