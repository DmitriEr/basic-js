module.exports = function transform(arr) {
let doubleNext = arr.findIndex(a => a == "--double-next");
let doublePrev = arr.findIndex(a => a == "--double-prev");
let discardNext = arr.findIndex(a => a == "--discard-next");
let discardPrev = arr.findIndex(a => a == "--discard-prev");
 
 for (let i = 0; i < arr.length; i++) {

  if (arr[i] == "--double-next") {
    doubleNext < arr.length - 1 ? arr.splice(doubleNext, 1, arr[i + 1]) : arr.splice(doubleNext, 1);
    }
    
  if (arr[i] == "--double-prev") {
   doublePrev > 0 ? arr.splice(doublePrev, 1, arr[i - 1]) : arr.splice(doublePrev, 1);
   }

  if (arr[i] == "--discard-next") {
    discardNext <= arr.length - 1 ? arr.splice(discardNext, 2) : arr.splice(discardNext, 1);
    }
    
  if (arr[i] == "--discard-prev") {
    discardPrev > 0 ? arr.splice(discardPrev - 1, 2) : arr.splice(discardPrev, 1)
    }
    
  }     
   return arr
 };

/*
if (!Array.isArray(arr)) throw new Error([]);

  let doubleNext = arr.findIndex(a => a == "--double-next");
  let doublePrev = arr.findIndex(a => a == "--double-prev");
  let discardNext = arr.findIndex(a => a == "--discard-next");
  let discardPrev = arr.findIndex(a => a == "--discard-prev");
  
  for (let i = 0; i < arr.length; i++) {
 
   if (arr[i] == "--double-next" && doubleNext < arr.length - 1) {
     arr.splice(doubleNext, 1, arr[i + 1]);
     }
     
   if (arr[i] == "--double-prev" && doublePrev > 0) {
    arr.splice(doublePrev, 1, arr[i - 1]);
    }
    
   if (arr[i] == "--discard-next" && discardNext < arr.length - 1) {
     arr.splice(discardNext, 2)
     }
     
   if (arr[i] == "--discard-prev" && discardPrev > 0) {
     arr.splice(discardPrev - 1, 2)
     }
     
   }     
   return arr
   */