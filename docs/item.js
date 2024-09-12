import { append, rectWithContent } from './svim/index.js';

export function createItem(key, value, type, description, svim) {
  switch (type) {
    case 'void': return VoidItem(key, value, description, svim);
    case 'null': return NullItem(key, value, description, svim);
    case 'boolean': return BooleanItem(key, value, description, svim);
    case 'string': return StringItem(key, value, description, svim);
    case 'number': return NumberItem(key, value, description, svim);
    case 'object': return ObjectItem(key, value, description, svim);
    case 'array': return ArrayItem(key, value, description, svim);
    case 'html-element': return HTMLElementItem(key, value, description, svim);
    case 'text': return TextItem(key, value, description, svim);
    case 'function': return FunctionItem(key, value, description, svim);
  }
}

export function VoidItem(key, value, description, svim) {
  const o = svim.g();
  const k = rectWithContent(key).setAttributes({class: 'item-k'});
  const v = rectWithContent(value).setAttributes({class: 'item-v void'});
  const d = rectWithContent(description).setAttributes({class: 'item-description'});
  append(o, k);
  append(o, v);
  append(o, d);
  return [o, k, v, d];
}

export function NullItem(key, value, description, svim) {
  const o = svim.g();
  const k = rectWithContent(key).setAttributes({class: 'item-k'});
  const v = rectWithContent(value).setAttributes({class: 'item-v null'});
  const d = rectWithContent(description).setAttributes({class: 'item-description'});
  append(o, k);
  append(o, v);
  append(o, d);
  return [o, k, v, d];
}

export function BooleanItem(key, value, description, svim) {
  const o = svim.g();
  const k = rectWithContent(key).setAttributes({class: 'item-k'});
  const v = rectWithContent(value ? 'true' : 'false').setAttributes({class: 'item-v boolean'});
  const d = rectWithContent(description).setAttributes({class: 'item-description'});
  append(o, k);
  append(o, v);
  append(o, d);
  return [o, k, v, d];
}

export function StringItem(key, value, description, svim) {
  const o = svim.g();
  const k = rectWithContent(key); // setAttributes({class: 'item-k'});
  const v = rectWithContent(value); // setAttributes({class: 'item-v string'});
  const d = rectWithContent(description); // setAttributes({class: 'item-description'});
  append(o, k);
  append(o, v);
  append(o, d);
  return [o, k, v, d];
}

export function NumberItem(key, value, description, svim) {
  const o = svim.g();
  const k = rectWithContent(key).setAttributes({class: 'item-k'});
  const v = rectWithContent(value).setAttributes({class: 'item-v number'});
  const d = rectWithContent(description).setAttributes({class: 'item-description'});
  append(o, k);
  append(o, v);
  append(o, d);
  return [o, k, v, d];
}

export function FunctionItem(key, value, description, svim) {
  const o = svim.g();
  const k = rectWithContent(key).setAttributes({class: 'item-k'});
  const v = rectWithContent(value).setAttributes({class: 'item-v function'});
  const d = rectWithContent(description).setAttributes({class: 'item-description'});
  append(o, k);
  append(o, v);
  append(o, d);
  return [o, k, v, d];
}

export function ObjectItem(key, value, description, svim) {
  const o = svim.g();
  const k = rectWithContent(key).setAttributes({class: 'item-k'});
  const v = rectWithContent(value).setAttributes({class: 'item-v object'});
  const d = rectWithContent(description).setAttributes({class: 'item-description'});
  append(o, k);
  append(o, v);
  append(o, d);
  return [o, k, v, d];
}

export function ArrayItem(key, value, description, svim) {
  const o = svim.g();
  const k = rectWithContent(key).setAttributes({class: 'item-k'});
  const v = rectWithContent(value).setAttributes({class: 'item-v array'});
  const d = rectWithContent(description).setAttributes({class: 'item-description'});
  append(o, k);
  append(o, v);
  append(o, d);
  return [o, k, v, d];
}

export function HTMLElementItem(key, value, description, svim) {
  const o = svim.g();
  const k = rectWithContent(key).setAttributes({class: 'item-k'});
  const v = rectWithContent(value).setAttributes({class: 'item-v html-element'});
  const d = rectWithContent(description).setAttributes({class: 'item-description'});
  append(o, k);
  append(o, v);
  append(o, d);
  return [o, k, v, d];
}

export function TextItem(key, value, description, svim) {
  const o = svim.g();
  const k = rectWithContent(key).setAttributes({class: 'item-k'});
  const v = rectWithContent(value).setAttributes({class: 'item-v text'});
  const d = rectWithContent(description).setAttributes({class: 'item-description'});
  append(o, k);
  append(o, v);
  append(o, d);
  return [o, k, v, d];
}
