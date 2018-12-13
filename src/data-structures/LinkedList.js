const Node = (value, next = null) => {
    return {
        value: value,
        next: next
    }
}

module.exports = class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = Node(value);

        if (!this.head){ 
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return this;
    }

    prepend(value) {
        const newNode = Node(value, this.head);

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
        let currentNode = this.head;

        //If the list has only one element
        if (currentNode.value === value && !currentNode.next) {
            this.head = null;
            return this;
        }
        while(currentNode) {
            if (currentNode.next && currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
            }

            currentNode = currentNode.next;
        }

        return this;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        }else{
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
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