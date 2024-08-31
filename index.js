import Svg from './elements/container/svg';
import G from './elements/container/g';
import Rect from './elements/graphic/rect';

function Svim(namespace = 'http://www.w3.org/2000/svg') {
    this.namespace = namespace;
    this.root = null;
}

Svim.prototype.svg = function(options) {
    return new Svg(options);
};

Svim.prototype.rect = function() {
    return new Rect();
};

Svim.prototype.g = function() {
    return new G();
};

export * from './action';

export default Svim;