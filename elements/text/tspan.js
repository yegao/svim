import { GRAPHIC } from '../../contstant';
import enhance from '../../enhance';

function Tspan(element = document.createElement('tspan')) {
    this.c1 = GRAPHIC;
    this.element = element;
}

export default enhance(Tspan);
