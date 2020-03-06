module.exports = class DepthCalculator {
  calculateDepth(arr) {
  // Если arr не массив возвращаем 0
  if (!Array.isArray(arr)) return 0;
  // Объевляем переменную счетчик
  let depth = 0;
  // Проверяем каждый элемент на массив
  arr.forEach(a => {
    if (Array.isArray(a)) {
        // Находим максимально вложенный элемент
        depth = Math.max(this.calculateDepth(a), depth);
        }
    })
    // Добавляем arr
    return depth + 1
  }
}