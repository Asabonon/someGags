"use strict";
// Обычные аргументы функции
function about(name, age) {
  console.log(`your name: ${name}`);
  console.log(`your age: ${age}`);
}

about("Andrey", "22");

// Аргумент как объект
function about2(arg) {
  console.log(`your name: ${arg.name}`);
  console.log(`your age: ${arg.age}`);
}

about2({
  name: "Andrey",
  age: "22",
});
