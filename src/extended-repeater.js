module.exports = function repeater(str, options) {        
  // результат общий
  let result = "";
  // результат внутри addition
  let secondStr = "";
  // результат внутри addition - разделитель в конце строки
  let letter = ""
  // проверка на наличие внутренниего повтора
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
    }
  // цикл внутреннего повтора
  for(let j = 0; j < options.additionRepeatTimes; j++) {
      // проверка на наличие дополнительного слова
      if (options.addition === undefined) {
        options.addition = "";
      };
      // проверка на наличие разделителя дополнительного слова
      if (options.additionSeparator === undefined) {
        options.additionSeparator = "|";
        };
        // результат
      secondStr += options.addition + options.additionSeparator;
      };
  // проверка на длину строки внутреннюю
  if (secondStr.length > 0) {
    letter = secondStr.slice(0, secondStr.length - options.additionSeparator.length)
  }
  // проверка на наличие повтора
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
    }
  // цилк общий
  for (let i = 0; i < options.repeatTimes; i++) {
    // проверка на разделитель
    if (options.separator === undefined) {
        options.separator = "+";
      };
    // результат
    result += str + letter + options.separator;
    }
  // результат - последний разделитель
  return result.slice(0, result.length - options.separator.length);

};