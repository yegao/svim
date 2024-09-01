import { append } from '../action';
import g from '../elements/container/g';
import text from '../elements/container/text';
import rect from '../elements/shape/rect';
import content from '../elements/shape/content';

export function createRectWithContent(data) {
    const _g = new g();
    const _text = new text();
    const _rect = new rect();
    const _content = new content(new Text(data));
    append(_text, _content);
    append(_g, _rect);
    append(_g, _text);
    return _g;
}
