let numbers = [10, 20, 30];
// let iter = numbers[Symbol.iterator]();

// console.log(iter.next()); // { value: 10, done: false }
// console.log(iter.next()); // { value: 20, done: false }
// console.log(iter.next()); // { value: 30, done: false }
// console.log(iter.next()); // { value: undefined, done: true }

// let iter = numbers[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());

function customIterator(arr) {
    let index = 0;
    return {
        next: function () {
            if (index < arr.length) {
                return { value: arr[index++], done: false };
            }
            else {
                return { done: true };
            }
        }
    }
}

let iter = customIterator(numbers)
console.log(iter.next());
console.log(iter.next());


