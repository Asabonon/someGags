const subway = {
  red: ["station 1", "station 2", "station 3"],
  green: ["station 4", "station 5", "station 6"],
};
// Вывести станции ветки через пробел
console.log(subway.green.join(" "));
console.log(subway.blue.join(" ")); // ошибка
console.log(subway.blue?.join(" ")); // underfined
