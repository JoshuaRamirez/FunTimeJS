import {ComponentNames} from "../Core/ComponentNames.js";
import {DomFactory} from "../Core/DomFactory.js";

export const Task = function(index) {
  let id;
  let element;
  let parent;
  let taskInput;
  let taskCheckbox;
  let deleteButton;
  let api;
  const initialize = function() {
    id = ComponentNames.Task + index;
  };
  const subscribe = function() {
    deleteButton.addEventListener('click', onDeleteButtonClicked);
  };
  const onDeleteButtonClicked = function() {
    const tasks = parent.FunTime.Component;
    tasks.Remove(index, element);
  };
  const render = function(acceptAdoption) {
    element = DomFactory.ListItem(id);
    element.FunTime = {Component: api};
    taskCheckbox = DomFactory.Checkbox();
    taskInput = DomFactory.Textbox();
    deleteButton = DomFactory.Button('X');
    element.appendChild(taskCheckbox);
    element.appendChild(taskInput);
    element.appendChild(deleteButton);
    subscribe();
    parent = acceptAdoption(api, element);
  };
  api = {
    Render: render
  };
  initialize();
  return api;
};
