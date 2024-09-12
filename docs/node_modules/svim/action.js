import { NONE, ATTACH, DETACH } from './contstant.js';

let pool = new Set();
let locking = false;

export const channelTaskQueue = [];
const channel = new MessageChannel();
const port1 = channel.port1;
const port2 = channel.port2;
port1.onmessage = () => {
    for (let len = channelTaskQueue.length, i = len - 1; i >= 0; i--) {
        channelTaskQueue[i]();
        channelTaskQueue.pop();
    }
}

export function work(stuff) {
    switch (stuff.action) {
        case ATTACH: {
            stuff.attach();
            break;
        }
        case DETACH: {
            stuff.ditach();
            break;
        }
    }
    stuff.action = NONE;
}

function flush(stuff) {
    pool.add(stuff);
    if (locking) {
        return;
    }
    queueMicrotask(() => {
        for (let stuff of pool) {
            work(stuff);
        }
        if (channelTaskQueue.length > 0) {
            port2.postMessage(null);
        }
        locking = false;
    });
}

export function getChild(parent, index) {
    let current;
    let forward = index;
    let backward = parent.size - index - 1;
    if (forward < backward) {
        current = parent.first;
        while (forward > 0) {
            current = current.next;
            forward--;
        }
    } else {
        current = parent.last;
        while (backward > 0) {
            current = current.prev;
            backward--;
        }
    }
    return current;
}

export function cover(parent, stuff) {
    parent.first = stuff;
    parent.last = stuff;
    stuff.parent = parent;
    // # TODO microtask
    stuff.action = ATTACH;
    parent.size++;
    flush(stuff);
}

export function prepend(parent, stuff) {
    if (parent.size === 0) {
        cover(parent, stuff);
    } else {
        const first = parent.first;
        stuff.next = first;
        first.prev = stuff;
        parent.first = stuff;
        stuff.parent = parent;
        // # TODO microtask
        stuff.action = ATTACH;
        parent.size++;
        flush(stuff);
    }
}

export function append(parent, stuff) {
    if (parent.size === 0) {
        cover(parent, stuff);
    } else {
        stuff.parent = parent;
        const last = parent.last;
        stuff.prev = last;
        last.next = stuff;
        parent.last = stuff;
        // # TODO microtask
        stuff.action = ATTACH;
        parent.size++;
        flush(stuff);
    }
}

export function before(parent, stuff, next) {
    stuff.parent = parent;
    const prev = next.prev;
    if (prev) {
        prev.next = stuff
        stuff.prev = prev;
    } else {
        parent.first = stuff;
    };
    stuff.next = next;
    next.prev = stuff;
    // # TODO microtask
    stuff.action = ATTACH;
    parent.size++;
    flush(stuff);
}

export function after(parent, stuff, prev) {
    stuff.parent = parent;
    const next = prev.next;
    prev.next = stuff
    stuff.prev = prev;
    if (next) {
        stuff.next = next;
        next.prev = stuff;
    } else {
        parent.last = stuff;
    }
    // # TODO microtask
    stuff.action = ATTACH;
    parent.size++;
    flush(stuff);
}

export function insert(parent, stuff, index) {
    if (index === parent.size) {
        append(parent, stuff);
    } else {
        const next = getChild(parent, index);
        before(parent, stuff, next);
    }
}

export function remove(stuff) {
    const parent = stuff.parent;
    const prev = stuff.prev;
    const next = stuff.next;
    if (prev) {
        prev.next = next;
    } else {
        parent.first = next;
    }
    if (next) {
        next.prev = prev;
    } else {
        parent.last = prev;
    }
    stuff.prev = null;
    stuff.next = null;
    stuff.parent = null;
    stuff.action = DETACH;
    parent.size--;
    flush(stuff);
}
