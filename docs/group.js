import { append, rectWithContent } from './node_modules/svim/index.js';
import { createItem } from './item.js';

export function groupObject(transformed, option = {title: '', width: 100, height: 30}, svim) {
    const { title, width = 100, height = 30 } = option;
    const o = svim.g();
    const u = svim.g();
    let i = 0;
    if (title) {
        const t = rectWithContent(title);
        t.first.setAttributes({x: 0, y: 0, width: 2 * width, height, fill: '#000000', stroke: '#000000'});
        t.last.setAttributes({x: 0, y: 0, width: 2 * width, height, fill: '#ffffff', stroke: '#ffffff'});
        append(o, t);
        i++;
    }
    for (let key in transformed) {
        const [o, k, v, d] = createItem(...transformed[key], svim);
        k.first.setAttributes({x: 0, y: i * height, width, height, fill: '#ffffff', stroke: '#000000'});
        v.first.setAttributes({x: width, y: i * height, width, height, fill: '#ffffff', stroke: '#000000'});
        // d.first.setAttributes({x: 200, y: i * 30, width: 100, height: 30, fill: '#0066dd', stroke: '#000000'});
        append(u, o);
        i++;
    }
    append(o, u);
    return o;
}