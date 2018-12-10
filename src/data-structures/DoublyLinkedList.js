const Node = (value, next = null, prev = null) => {
    return {
        value: value,
        next: next,
        prev: prev
    };
};

module.exports = class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let newNode = Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this;
    }

    prepend(value) {
        let newNode = Node(value, this.head);

        if (this.head) {
            this.head.prev = newNode;
        }

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    contains(value) {
        let currentNode = this.head;
        while(currentNode) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.next;
        }

        return false;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while(currentNode) {
            if (currentNode.value === value){
                if (!currentNode.prev) {
                    this.head = this.head.next;
                }else if (!currentNode.next) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }else{
                    const prevNode = currentNode.prev;
                    const nextNode = currentNode.next;

                    prevNode.next = nextNode;
                    nextNode.prev = prevNode;
                }
            }

            currentNode = currentNode.next;
        }

        return this;
    }

    toArray() {
        const nodes = [];

        let currentNode = this.head;
        while(currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }
}