import {ADD_TODO} from './types';
export const addTodo = text => ({
  type: ADD_TODO,
  text: text,
});
