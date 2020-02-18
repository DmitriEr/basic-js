module.exports = function createDreamTeam(members) {
  let arr = []
  if (Array.isArray(members)) {
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === "string") {
      arr.push(/[A-Za-z]/.exec(members[i]).join(""));
      }
    }
  }
  return arr.map(item => item.toUpperCase()).sort().join("");
}