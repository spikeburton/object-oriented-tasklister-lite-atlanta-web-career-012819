const TASK_FORM = document.getElementById('create-task-form')
const LIST = document.getElementById('list')

document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.innerHTML = taskList.render());

  // Add Form Behavior Here!
  const taskForm = document.getElementById('create-task-form');
  taskForm.addEventListener('submit', e => {
    e.preventDefault();

    const item = new TaskListItem(e.target.elements["new-task-description"].value);
    taskList.addItem(item);

    renderApp();
  });

  listContainer.addEventListener('click', e => {
    // console.log(e.target.nodeName)
    if (e.target.nodeName === "BUTTON") {
      // console.log(e.target)
      taskList.removeItem(e.target.dataset.description);

      renderApp();
    }
  })

  renderApp()
});
