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
    Render();
  };
  const adoptTasks = function(tasksElement){
    element.appendChild(tasksElement)
  };
  const Render = function() {
    element.FunTime = {Component: api};
    tasks = Tasks();
    tasks.Render(adoptTasks);
  };
  api = {Render};
  document.addEventListener("DOMContentLoaded", initialize);
  return api;
};
