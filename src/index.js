const HashTable = require('./data-structures/HashTable');

const Alfred = {
    name: 'Alfred',
    age: 23
};
const Meggie = {
    name: 'Meggie',
    age: 41
};
const Edgar = {
    name: 'Edgar',
    age: 24
};

let userTable = new HashTable();

userTable.set(Edgar.name, Edgar);
userTable.set(Alfred.name, Alfred);
userTable.set(Meggie.name, Meggie);

console.log(userTable.getKeys());
console.log(userTable.get(Edgar.name))
console.log(userTable.delete(Edgar.name));
console.log(userTable.getKeys())
console.log(`Has? ${userTable.has(Meggie.name)}`);