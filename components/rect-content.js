import { append, channelTaskQueue } from '../action';
import g from '../elements/container/g';
import text from '../elements/container/text';
import rect from '../elements/shape/rect';
import content from '../elements/shape/content';

export function rectWithContent(data, option = { deltaX: 5 }) {
    const _g = new g();
    const _text = new text();
    const _rect = new rect();
    const _content = new content(new Text(data));
    append(_text, _content);
    append(_g, _rect);
    append(_g, _text);
    const task = () => {
        const rectbox = _rect.element.getBBox();
        const textbox = _text.element.getBBox();
        const deltaX = option.deltaX;
        const innerWidth = rectbox.width - (deltaX << 1);
        const textWidth = textbox.width;
        if (textWidth > 0 && textWidth > innerWidth) {
            const scale = innerWidth/textWidth;
            const originX = rectbox.x + deltaX;
            _text.setAttributes({
                'transform': 'scale(' + scale + ')',
                'transform-origin': originX + " " + (rectbox.y + (rectbox.height >> 1)),
                'x': originX,
                'y': rectbox.y + (rectbox.height >> 1),
                'text-anchor': 'start',
                'dominant-baseline': 'central'
            });
        } else {
            _text.setAttributes({
                'x': rectbox.x + deltaX,
                'y': rectbox.y + (rectbox.height >> 1),
                'text-anchor': 'start',
                'dominant-baseline': 'central'
            });
        }
    }
    channelTaskQueue.push(task);
    return _g;
}
