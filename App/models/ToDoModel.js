export default class ToDoModel {
  constructor(title, completed) {
    this.title = title;
    this.completed = completed;
    this.created = new Date();
  }
}
