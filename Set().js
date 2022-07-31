// #1 Set()

const set = new Set("Sunki");
// Set(5) { 'S', 'u', 'n', 'k', 'i' }

// add

set.add(1);
// Set(6) { 'S', 'u', 'n', 'k', 'i', 1 }

set.add("k");
// Set(5) { 'S', 'u', 'n', 'k', 'i' }

// delete

set.delete("K");
// Set(4) { 'S', 'u', 'n', 'i' }

// has

console.log(set.has("k"));
// true

// size

console.log(set.size);
// 5

console.log(set);
