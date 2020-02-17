module.exports = function countCats(cat) {
  let count = 0;
  for (let i = 0; i < cat.length; i++) {
    for (let j = 0; j < cat[i].length; j++) {
      if (cat[i][j] == "^^") {
        count++
        } 
      }
    }
  return count;
};