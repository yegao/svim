import { work } from "./action.js";
import { NONE } from "./contstant.js";

export default function enhance(clazz) {
    clazz.prototype.parent = null;

    clazz.prototype.first = null;

    clazz.prototype.last = null;

    clazz.prototype.prev = null;

    clazz.prototype.next = null;

    clazz.prototype.size = 0;

    clazz.prototype.action = NONE;

    clazz.prototype.listeners = [];

    clazz.prototype.getAttribute = function(key) {
        return this.element.getAttribute(key);
    }

    clazz.prototype.getAttributes = function() {
        const keys = this.getAttributeNames();
        const attributes = Object.create(null);
        for (let key of keys) {
            attributes[key] = element.getAttribute(key);
        }
        return attributes;
    }

    clazz.prototype.getAttributeNames = function() {
        return this.element.getAttributeNames();
    }

    clazz.prototype.setAttribute = function(...args) {
        this.element.setAttribute(...args);
        return this;
    }

    clazz.prototype.setAttributes = function(o) {
        for (let key in o) {
            this.element.setAttribute(key, o[key]);
        }
        return this;
    }

    clazz.prototype.viewBox = function(x, y, width, height, preserveAspectRatio = 'xMidYMid meet') {
        this.element.setAttribute('viewBox', [x, y, width, height].join(','));
        if (preserveAspectRatio !== 'xMidYMid meet') {
            this.element.setAttribute('preserveAspectRatio', preserveAspectRatio);
        }
        return this;
    }

    clazz.prototype.on = function(type, listener, options) {
        this.listeners.push([type, listener, options]);
        return this;
    };
    
    clazz.prototype.off = function(index) {
        this.listeners.splice(index, 1);
        return this;
    };
    
    clazz.prototype.attach = function() {
        try {
            const parent = this.parent;
            if (parent.last === this) {
                parent.element.append(this.element);
            } else {
                if (this.next.action !== NONE) {
                    work(this.next);
                }
                parent.element.insertBefore(this.element, this.next.element);
            }
            return this;
        } catch (e) {
            console.log(parent);
            console.log(this);
            throw new Error(e);
        }
    };
    
    clazz.prototype.ditach = function() {
        this.element.remove();
        for (let listener of this.listeners) {
            this.element.removeEventListener(...listener);
        }
        this.listeners = [];
        return this;
    };

    return clazz;
}