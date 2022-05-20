/**
 * @jest-environment jsdom
 */

import TaskList from '../modules/class-task-list.js';

// Testing Add Item Todo


// Testing Remove Item Todo

describe('Testing Remove Item', () => {
  it('Removing todo from array to be null', () => {
    const todo = new TaskList();
    todo.addTask('Drive', false, 5);
    todo.removeTask(5);

    expect(todo[5]).toBeUndefined();
  });
  it('Removing todo from a multiple added todos which returns details', () => {
    const todo = new TaskList();
    todo.addTask('Read', false, 4);
    todo.removeTask(5);

    expect(todo.data[4].description).toEqual('Read');
  });
  it('Removing  todo from a multiple added todos which return length', () => {
    const todo = new TaskList();
    todo.addTask('Pray', false, 5);
    todo.addTask('Lunch', false, 6);
    todo.removeTask(3);

    expect(todo.data).toHaveLength(6);
  });
  it('remove', () => {
    const todo = new TaskList();
    todo.removeTask(4);
    expect(todo.data[4].description).toEqual('Lunch');
  });
});