function cloneObject(o) {
    const object = Object.create(null);
    for (let key in o) {
        const value = o[key];
        if (value === void 0) {
            object[key] = [key, value, 'void'];
            continue;
        }
        if (value === null) {
            object[key] = [key, value, 'null'];
            continue;
        }
        if (typeof value === 'boolean') {
            object[key] = [key, value, 'boolean'];
            continue;
        }
        if (typeof value === 'string') {
            object[key] = [key, value, 'string'];
            continue;
        }
        if (typeof value === 'number') {
            object[key] = [key, value, 'number'];
            continue;
        }
        if (value instanceof HTMLElement) {
            object[key] = [key, value.tagName, 'html-element'];
            continue;
        }
        if (value instanceof Text) {
            object[key] = [key, value.innerText, 'text'];
            continue;
        }
        if (value instanceof Array) {
            object[key] = [key, value.join(','), 'array'];
            continue;
        }
        if (value instanceof Function) {
            object[key] = [key, value.name, 'function'];
            continue;
        }
        if (typeof value === 'object') {
            object[key] = [key, '{ ' + Object.keys(value).join(',') + ' }', 'object'];;
            continue;
        }
        console.log(key, object[key])
    }
    return object;
}

export function transformObject(payload, descriptions = {}) {
    const object = cloneObject(payload);
    for (let key in object) {
        object[key].push(descriptions[key]);
    }
    return object;
}
