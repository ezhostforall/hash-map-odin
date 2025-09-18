const HashMap = require('./HashMap');

const test = new HashMap() 

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log('Length after initial population:', test.length());
console.log('Current capacity:', test.capacity);
console.log('Current load factor:', test.length() / test.capacity);

console.log('\n=== Testing Overwrite (before expansion) ===');
console.log('Before overwrite - apple:', test.get('apple'));