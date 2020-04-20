class Stack {
  constructor () {
    this.data = []
  }
  remove ()  {
    this.data.pop()
  }
  add (element) {
    this.data.push(element)
  }
}
