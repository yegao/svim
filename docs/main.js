import Svim, { append } from './node_modules/svim/index.js';
import { groupObject } from './group.js';
import { transformObject } from './transform.js';

const object = {
    'name': 'svim',
    'Mission': 'Fast svg generation',
    'Completed': false,
    'Long text in table cell': 'Long text will be scaled to the appropriate size',
    'Version': 'In development'
};

const svim = new Svim();
svim.root = svim.svg(document.getElementById('paper').children[0]);
const group = groupObject(transformObject(object), {title: 'svim', width: 200, height: 30}, svim);
append(svim.root, group);