const chainMaker = {
  step: [],
  getLength() {
    this.step.length;
    return this;
    },
  addLink(value) {
    value === undefined ? value = "( )" : value = "( " + value + " )";
    this.step.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.step.length || typeof(position) !== "number" || position !== parseInt(position)) {
      this.step = [];
      throw new Error("removing wrong link");
      }
    this.step.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.step.reverse();
    return this;
  },
  finishChain() {
    let str = this.step;
    this.step = [];
    return str.join("~~");
  }
};

module.exports = chainMaker;