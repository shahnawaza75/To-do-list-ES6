/**
 * @jest-environment jsdom
 */

import TaskList from '../modules/class-task-list.js';

// Testing Add Item Todo

describe('Testing Add Item', () => {
  test('Adding todo to array not to be null', () => {
    const todo = new TaskList();
    todo.addTask('WakeUp', false, 0);

    expect(todo.length).not.toBeNull();
  });
  it('Adding new task', () => {
    const todo = new TaskList();
    todo.addTask('Practice', false, 1);

    expect(todo.data[1].description).toEqual('Practice');
  });
  it('Adding todo to return details property', () => {
    const todo = new TaskList();
    todo.addTask('Sleep', false, 2);

    expect(todo.data[2].description).toBe('Sleep');
  });
  it('Adding todo to return boolean', () => {
    const todo = new TaskList();
    todo.addTask('Cook', true, 3);
  });
  it('Adding todo to return index', () => {
    const todo = new TaskList();
    todo.addTask('Singing', false, 4);

    expect(todo.data[4].id - 1).toEqual(4);
  });
});

