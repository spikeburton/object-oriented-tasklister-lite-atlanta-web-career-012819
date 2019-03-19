class TaskList {
  constructor() {
    this.items = []
  }

  render() {
    const element = document.createElement('ul');

    this.items.forEach(item => {
      element.appendChild(item.render());
    })

    return element.outerHTML;
  }

  addItem(item) {
    this.items.push(item)
  }

  removeItem(desc) {
    const x = this.items.findIndex(item => item.description === desc)
    this.items.splice(x, 1)
  }
}
