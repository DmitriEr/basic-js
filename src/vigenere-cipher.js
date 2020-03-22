// массив с алфавитом
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

class VigenereCipheringMachine {
    encrypt(str, key) {
        // массив для результата
        let arr = [];
        // счетчик
        let count = 0;
        // цикл строки
        for (let i = 0; i < str.length; i++) {
          // если значение - латинская буква
          if (/[A-Za-z]/.test(str[i])) {
            // номер буквы в алфавите для строки
            let strCode = str[i].toUpperCase().charCodeAt() - 65;
            // номер буквы в алфавите для ключа
            let keyCode = key[count % key.length].toUpperCase().charCodeAt()-65;
            // сумма. Результат буквы из массива с алфавитом. Если сумма больше длины алфавита. Тогда берется индекс буквы (остаток от деления на длину алфавита)
            let result = alphabet[(strCode + keyCode) % 26];
            // записываем в новый массив значение
            arr[i] = result;
            // счетчик повторяет ключ. если длина ключа меньше длины строки
            count++;
            } else {
              // если значение другое (не латинская буква). Записывается, как есть
              arr[i] = str[i];
              }
          }
        //   вывод строку
      return arr.join("");  
    }

    decrypt(message, key) {
        // массив для результата
        let arr = []
        // счетчик
        let count = 0;
        // цикл сообщения
        for (let i = 0; i < message.length; i++) {
            // если значение - латинская буква
            if (/[A-Za-z]/.test(message[i])) {
                // номер буквы в алфавите для сообщения
                let messageLetter = message[i].toUpperCase().charCodeAt() - 65;
                // номер буквы в алфавите для ключа
                let keyLetter = key[count % key.length].toUpperCase().charCodeAt() - 65;
                // сумма. Результат буквы из массива с алфавитом. При отрицательном числе messageLetter - keyLetter прибавляем длину алфавита
                let result;
                if (messageLetter - keyLetter >= 0) {
                    result = alphabet[(messageLetter - keyLetter) % 26];
                } else {
                    result = alphabet[(messageLetter - keyLetter + 26) % 26];
                }
                // записываем в новый массив значение
                arr[i] = result;
                // счетчик повторяет ключ. если длина ключа меньше длины строки
                count++;
            } else {
                // если значение другое (не латинская буква). Записывается, как есть
                arr[i] = message[i];
            }
        }
        // Вывод строки
        return arr.join("")
    }
}

module.exports = VigenereCipheringMachine;
