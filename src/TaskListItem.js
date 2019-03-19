class TaskListItem {
  constructor(description) {
    this.description = description;
  }

  render() {
    const element = document.createElement('li');
    const deleteButton = document.createElement('button')

    element.innerText = this.description;

    deleteButton.innerText = " X ";
    deleteButton.dataset.description = this.description;
    element.appendChild(deleteButton);

    return element;
  }
}
