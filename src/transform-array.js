module.exports = function transform(/* arr */) {
      throw 'Not implemented';
      };

/*
if (arr.length == 0) {
          return arr;
          } else if (!Array.isArray(arr)) {
            throw new Error ("Not Arror")
            } else if (arr.includes("--double-next") || arr.includes("--discard-next")) {
              
              for (let i = 0; i < arr.length - 1; i++) {  
              if (arr[i] === "--double-next") {
                arr[i] = parseInt(arr[i + 1]);
                }
              if (arr[i] == "--discard-next") {
                arr.splice(arr.indexOf("--discard-next"), 2)
                }
              }   
            } else if (arr.includes("--double-prev") || arr.includes("--discard-prev")) {
              
              for (let i = 1; i < arr.length; i++) {  
              if (arr[i] == "--double-prev") {
                arr[i] = parseInt(arr[i - 1]);
                }
              if (arr[i] == "--discard-prev") {
                arr.splice((arr.indexOf("--discard-prev") - 1), 2)
                }
              }     
            }
          return arr;
*/