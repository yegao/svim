import Svg from './elements/container/svg.js';
import G from './elements/container/g.js';
import Desc from './elements/description/desc.js';
import Metadata from './elements/description/metadata.js';
import Title from './elements/description/title.js';
import Rect from './elements/shape/rect.js';
import Text from './elements/container/text.js';
import Tspan from './elements/container/tspan.js';

function Svim(namespace = 'http://www.w3.org/2000/svg') {
    this.namespace = namespace;
    this.root = null;
}

Svim.prototype.svg = function(element) {
    return new Svg(element);
};

Svim.prototype.g = function(element) {
    return new G(element);
};

Svim.prototype.desc = function(element) {
    return new Desc(element);
};

Svim.prototype.metadata = function(element) {
    return new Metadata(element);
};

Svim.prototype.title = function(element) {
    return new Title(element);
};

Svim.prototype.rect = function(element) {
    return new Rect(element);
};

Svim.prototype.text = function(element) {
    return new Text(element);
};

Svim.prototype.tspan = function(element) {
    return new Tspan(element);
};

export * from './action.js';

export * from './components/rect-content.js';

export default Svim;