var Shell = function() {
  var id;
  var element;
  var tasks;
  var initialize = function() {
    id = Components.Shell;
    element = document.getElementById(id);
    render();
  };
  var adoptTasks = function(tasksElement){
    element.appendChild(tasksElement)
  };
  var render = function() {  
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

var Tasks = function() {
  var id;
  var element;
  var parent;
  var addButton;
  var unOrderedList;
  var tasks = [];
  var api;
  var taskCounter;
  var initialize = function() {
    id = Components.Tasks;
    taskCounter = 0;
  };
  var subscribe = function() {
    addButton.addEventListener('click',onAddTaskClicked);
  };
  var onAddTaskClicked = function() {
    add();
  };
  var add = function() {
    var index = taskCounter;
    var task = Task(index);
    task.Render(adoptTask);
    tasks.push(task);
    taskCounter++;
  };
  var adoptTask = function(task, taskElement) {
    unOrderedList.appendChild(taskElement);
    return element;
  }
  var remove = function(index, element) {
    tasks.splice(index, 1);
    unOrderedList.removeChild(element);
  }
  var render = function(acceptAdoption) {
    element = DomFactory.Divider(id);
    unOrderedList = DomFactory.UnOrderedList();
    addButton = DomFactory.Button('New Task');
    element.appendChild(addButton);
    element.appendChild(unOrderedList);
    element.FunTime = {Component: api};
    add();
    subscribe();
    parent = acceptAdoption(element);
  };
  initialize();
  api = {
    Render: render,
    Add: add,
    Remove: remove
  };
  return api;
};

var Task = function(index) {
  var id;
  var element;
  var parent;
  var taskInput;
  var taskCheckbox;
  var deleteButton;
  var api;
  var initialize = function() {
    id = Components.Task + index;
  };
  var subscribe = function() {
    deleteButton.addEventListener('click', onDeleteButtonClicked);
  };
  var onDeleteButtonClicked = function() {
    var tasks = parent.FunTime.Component;
    tasks.Remove(index, element);
  };
  var render = function(acceptAdoption) {
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

var DomFactory = {
  Attribute: (name, value) => {
    var attribute = document.createAttribute(name)
    attribute.value = value;
    return attribute;
  },
  Element: (type, attributes) => {
    var element = document.createElement(type, attributes);
    attributes.forEach(attribute => {
      element.setAttribute(attribute.name, attribute.value);
    });
    return element;
  },
  Input: (options) => {
    var initialValue = options.initialValue;
    var type = options.type
    var attributes = [
      {name: 'value', value: initialValue},
      {name: 'type', value: type},
    ];
    var input = DomFactory.Element('input', attributes);
    return input;
  },
  Checkbox: () => {
    return DomFactory.Input({initialValue:'',type:'checkbox'});
  },
  Textbox: (value) => {
    if(!value)value='';
    return DomFactory.Input({initialValue:value,type:'input'});
  },
  UnOrderedList: (id) => {
    var list = document.createElement('ul');
    if(id)list.setAttribute('id', id);
    return list;
  },
  ListItem: (id) => {
    var listItem = document.createElement('li');
    listItem.setAttribute('id', id);
    return listItem;
  },
  Button: (label) => {
    var button = document.createElement('button');
    button.innerText = label;
    return button;
  },
  Divider: (id) => {
    var divider = document.createElement('div');
    divider.setAttribute('id', id);
    return divider;
  }
};

Components = {
  Shell: "Shell",
  Tasks: "Tasks",
  Task: "Task",
}

Shell();