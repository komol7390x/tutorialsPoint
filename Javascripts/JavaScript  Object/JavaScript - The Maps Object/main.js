// JavaScript Map Methods - Summary with Examples

// 1. clear() - Removes all elements from the Map
const map1 = new Map([["a", 1], ["b", 2]]);
map1.clear();
console.log(map1.size); // 0

// 2. delete(key) - Deletes a specific element by key
const map2 = new Map([["a", 1], ["b", 2]]);
map2.delete("a");
console.log(map2); // Map { 'b' => 2 }

// 3. entries() - Returns an iterator of [key, value] pairs
const map3 = new Map([["x", 10], ["y", 20]]);
for (let [key, value] of map3.entries()) {
    console.log(key, value); // x 10, y 20
}

// 4. forEach(callback) - Executes a function for each key/value pair
const map4 = new Map([["name", "Ali"], ["age", 25]]);
map4.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// 5. get(key) - Returns the value for the given key
const map5 = new Map();
map5.set("country", "Uzbekistan");
console.log(map5.get("country")); // Uzbekistan

// 6. has(key) - Checks if a key exists
const map6 = new Map([["id", 101]]);
console.log(map6.has("id"));   // true
console.log(map6.has("name")); // false

// 7. keys() - Returns an iterator of keys
const map7 = new Map([["lang", "JS"], ["version", "ES6"]]);
for (let key of map7.keys()) {
    console.log(key); // lang, version
}

// 8. set(key, value) - Adds or updates an element
const map8 = new Map();
map8.set("color", "blue");
console.log(map8); // Map { 'color' => 'blue' }

// 9. values() - Returns an iterator of values
const map9 = new Map([["one", 1], ["two", 2]]);
for (let value of map9.values()) {
    console.log(value); // 1, 2
}
