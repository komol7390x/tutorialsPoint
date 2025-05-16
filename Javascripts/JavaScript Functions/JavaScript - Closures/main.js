function createCounter() {
    let count = 0; // bu o'zgaruvchiga tashqaridan kirib bo'lmaydi

    return {
        increment: function () {
            count++;
            console.log("Count:", count);
        },
        decrement: function () {
            count--;
            console.log("Count:", count);
        }
    };
}
const counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1

// ------------------------------------------------------------------------------

function once(fn) {
    let done = false;

    return function (...args) {
        if (!done) {
            done = true;
            return fn.apply(this, args);
        } else {
            console.log("Bu funksiya faqat bir marta bajariladi.");
        }
    };
}

const helloOnce = once(() => console.log("Salom, bir marta!"));

helloOnce(); // Salom, bir marta!
helloOnce(); // Bu funksiya faqat bir marta bajariladi.

// ------------------------------------------------------------------------------

function greetingGenerator(language) {
    return function (name) {
        if (language === "uz") {
            console.log(`Salom, ${name}!`);
        } else if (language === "en") {
            console.log(`Hello, ${name}!`);
        } else {
            console.log(`Hi, ${name}!`);
        }
    };
}
const greetUzbek = greetingGenerator("uz");
const greetEnglish = greetingGenerator("en");

greetUzbek("Komol"); // Salom, Komol!
greetEnglish("Komol"); // Hello, Komol!

// ------------------------------------------------------------------------------

function outer() {
    function inner() {
        console.log("Ichki funksiya ishladi");
    }
    return {
        inner: inner // yoki shorthand: inner
    };
}

outer().inner(); // ✅ "Ichki funksiya ishladi"

// ------------------------------------------------------------------------------

function outer() {
    return {
        inner() {
            console.log("Ichki funksiya ishladi");
        }
    };
}

outer().inner(); // ✅
  