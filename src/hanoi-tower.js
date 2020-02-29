module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    
    let turn = Math.pow(2, disksNumber) - 1;
    let second = turn / (turnsSpeed / 3600);
    
    let obj = {
      turns: turn,
      seconds: second
      }
      
    return obj;

}