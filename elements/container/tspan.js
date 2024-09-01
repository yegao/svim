import { CONTAINER } from '../../contstant';
import enhance from '../../enhance';

function Tspan(element = document.createElement('tspan')) {
    this.c1 = CONTAINER;
    this.element = element;
}

export default enhance(Tspan);
