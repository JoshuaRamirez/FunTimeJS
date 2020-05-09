import {ComponentNames} from "../Core/ComponentNames.js";
import {DomFactory} from "../Core/DomFactory.js";
import {Task} from "./Task.js";

export const Tasks = function() {
  let id;
  let element;
  let parent;
  let addButton;
  let unOrderedList;
  let tasks = [];
  let api;
  let taskCounter;
  const initialize = function() {
    id = ComponentNames.Tasks;
    taskCounter = 0;
  };
  const subscribe = function() {
    addButton.addEventListener('click',onAddTaskClicked);
  };
  const onAddTaskClicked = function() {
    Add();
  };
  const Add = function() {
    const index = taskCounter;
    const task = Task(index);
    task.Render(adoptTask);
    tasks.push(task);
    taskCounter++;
  };
  const adoptTask = function(task, taskElement) {
    unOrderedList.appendChild(taskElement);
    return element;
  }
  const Remove = function(index, element) {
    tasks.splice(index, 1);
    unOrderedList.removeChild(element);
  }
  const Render = function(acceptAdoption) {
    element = DomFactory.Divider(id);
    unOrderedList = DomFactory.UnOrderedList();
    addButton = DomFactory.Button('New Task');
    element.appendChild(addButton);
    element.appendChild(unOrderedList);
    element.FunTime = {Component: api};
    Add();
    subscribe();
    parent = acceptAdoption(element);
  };
  initialize();
  api = {Add, Remove, Render};
  return api;
};
