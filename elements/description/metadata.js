import { GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function Metadata(element = document.createElement('metadata')) {
    this.c1 = GRAPHIC;
    this.element = element
}

export default enhance(Metadata);
