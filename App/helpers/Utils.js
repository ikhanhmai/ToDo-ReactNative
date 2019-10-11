export default class Utils {
  static move = (arr, fromIndex, toIndex) => {
    return arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
  };
  static findTodo = (todo, todoList) => {
    return todoList.find(
      item => item.title.toLowerCase() === todo.title.toLowerCase(),
    );
  };
}
