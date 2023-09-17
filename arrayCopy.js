let arr = [44, 55];
console.log([...arr, 33, 99]);
console.log([33, 99, ...arr]);

// Удаление дубликатов
const myArr = [3, 4, 3, 5, 3, 4, 5, 6, 7, 12, 3, 4, 1, 12, 1];
console.log(new Set(myArr)); // в виде Set
console.log(...new Set(myArr)); // в виде массива

// Перевод массива в числовой
const ar8 = [["2"], "2", 34, 88, "99"];
const ar8Num = ar8.map(Number);
console.log(ar8Num);
