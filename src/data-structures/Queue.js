const LinkedList = require('./LinkedList');

module.exports = class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    isEmpty() {
        return !this.list.head;
    }

    peek() {
        if (!this.list.head) {
            return null;
        }

        return this.list.head.value;
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        const removedHead = this.list.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    toArray() {
        return this.list
          .toArray()
          .map(linkedListNode => linkedListNode.value);
    }
}