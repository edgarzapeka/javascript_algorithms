const LinkedList = require('./data-structures/LinkedList');
const DoublyLinkedList = require('./data-structures/DoublyLinkedList');

const Alice = {
    name: 'Alice',
    age: 23,
    gender: 'F'
};
const Edgar = {
    name: 'Edgar',
    age: 24,
    gender: 'M'
};
const Avi = { 
    name: 'Avi',
    age: 24,
    gender: 'M'
};
const Mlissa = {
    name: 'Mlissa',
    age: 25,
    gender: 'F'
};
const LastVonTier = {
    name: 'Last Von Tier',
    age: 54,
    gender: 'M'
};
const TheLast = {
    name: 'The last last',
    age: 0,
    gender: 'N'
};
const Loren = {
    name: 'Loren',
    age: 42,
    gender: 'F'
};

let list = new DoublyLinkedList();
const people = [Alice, Edgar, Avi, Mlissa];
people.forEach(p => list.append(p));

list.prepend(LastVonTier);
list.prepend(TheLast);
list.delete(Edgar);

list.toArray().forEach(node => {
    console.log(`value: ${node.value.name} | next: ${node.next ? node.next.value.name : null} | prev: ${node.prev ? node.prev.value.name : null}`)
})

console.log(list.contains(Edgar));
console.log(list.contains(Mlissa));