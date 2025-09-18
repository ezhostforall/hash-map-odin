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

test.set('apple', 'dark red');
console.log('After overwrite - apple:', test.get('apple'));
console.log('Length after overwrite:', test.length());

test.set('banana', 'bright yellow');
console.log('After overwrite - banana:', test.get('banana'));
console.log('Length after second overwrite:', test.length());

console.log('\n=== Triggering HashMap Expansion ===');
console.log('Before expansion - Length:', test.length(), 'Capacity:', test.capacity);

test.set('moon', 'silver');
console.log('After expansion - Length:', test.length(), 'Capacity:', test.capacity);
console.log('New load factor:', test.length() / test.capacity);

console.log('\n=== Testing Overwrite (after expansion) ===');
console.log('Before overwrite - dog:', test.get('dog'));

test.set('dog', 'dark brown');
console.log('After overwrite - dog:', test.get('dog'));
console.log('Length after overwrite:', test.length());

console.log('\n=== Testing get() method ===');
console.log('apple:', test.get('apple'));
console.log('moon:', test.get('moon'));
console.log('nonexistent:', test.get('nonexistent'));