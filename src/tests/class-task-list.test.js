/**
 * @jest-environment jsdom
 */

import TaskList from '../modules/class-task-list.js';

// Testing Add Item Todo

describe('Testing Add Item', () => {
  test('Adding todo to array not to be null', () => {
    const todo = new TaskList();
    todo.addTask('WakeUp', false, 0);

   