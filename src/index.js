const LinkedList = require('./data-structures/LinkedList');

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

let list = new LinkedList();
const people = [Alice, Edgar, Avi, Mlissa];
people.forEach(p => list.append(p));

list.prepend(LastVonTier);
list.prepend(TheLast);

//list.delete(Edgar);

list.toArray().forEach(node => {
    if (node.next){
        console.log(`value: ${node.value.name} | next: ${node.next.value.name}`)
    }else{
        console.log(`value: ${node.value.name} | next: ${node.next}`)
    }
})

console.log(`Does list contain Edgar? ${list.contains(Edgar)}`);
console.log(`Does list contain Loren? ${list.contains(Loren)}`);
console.log('Reversed');
list.toArray().reverse().forEach(node => {
    if (node.next){
        console.log(`value: ${node.value.name} | next: ${node.next.value.name}`)
    }else{
        console.log(`value: ${node.value.name} | next: ${node.next}`)
    }
})