const LinkedList = require('./LinkedList.js');

module.exports = class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    isEmpty() {
        return !this.list.head;
    }

    peek() {
        if (this.isEmpty) {
            return null;
        }

        return this.list.head.value;
    }

    push(value) {
        this.list.prepend(value);
    }

    pop() {
        const removedHead = this.list.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    toArray() {
        return this.list
          .toArray()
          .map(linkedListNode => linkedListNode.value);
    }
}