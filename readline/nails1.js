// Чат GPT
 function minTotalLengthOfThreads(numNails, nails) {
  // Сортируем координаты гвоздиков в порядке возрастания
  nails.sort((a, b) => a - b);

  // Инициализируем массив dp
  const dp = new Array(numNails).fill(Infinity);

  // Первый гвоздик (0-based индекс) имеет длину ниточки 0
  dp[0] = 0;

  // Вычисляем минимальную суммарную длину ниточек
  for (let i = 1; i < numNails; i++) {
    for (let j = 0; j < i; j++) {
      if (nails[i] - nails[j] <= 2) {
        dp[i] = Math.min(dp[i], dp[j] + nails[i] - nails[j]);
      }
    }
  }

  return dp[numNails - 1]; // Минимальная суммарная длина ниточек
}

// Пример использования
const numNails = 5; // Количество гвоздей
const nails = [4, 2, 7, 1, 5]; // Координаты гвоздей

const minCost = minTotalLengthOfThreads(numNails, nails);
console.log(minCost);