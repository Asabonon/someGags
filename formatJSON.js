const arg = {
  name: "Andrey",
  age: 22,
  data: ["hi", "hello"],
};
console.log(JSON.stringify(arg));
// ! Вывод:
// {"name":"Andrey","age":22,"data":["hi","hello"]}

// вид разделителя — null; отступы пробелов — 2
console.log(JSON.stringify(arg, null, 2));
// ! Вывод:
// {
//   "name": "Andrey",
//   "age": 22,
//   "data": [
//     "hi",
//     "hello"
//   ]
// }
