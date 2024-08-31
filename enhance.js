import { work } from "./action";
import { NONE } from "./contstant";

export default function enhance(clazz) {
    clazz.prototype.on = function(type, listener, options) {
        this.listeners.push([type, listener, options]);
        return this;
    };
    
    clazz.prototype.off = function(index) {
        this.listeners.splice(index, 1);
        return this;
    };
    
    clazz.prototype.attach = function() {
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