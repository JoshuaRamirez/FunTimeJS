import {ComponentNames} from "../Core/ComponentNames.js";
import {Tasks} from "./Tasks.js";

export const Shell = function() {
  let id;
  let element;
  let tasks;
  let api;
  const initialize = function() {
    id = ComponentNames.Shell;
    element = document.getElementById(id);
    render();
  };
  const adoptTasks = function(tasksElement){
    element.appendChild(tasksElement)
  };
  const render = function() {
    element.FunTime = {Component: api};
    tasks = Tasks();
    tasks.Render(adoptTasks);
  };
  api = {
    Render: render
  };
  document.addEventListener("DOMContentLoaded", initialize);
  return api;
};
