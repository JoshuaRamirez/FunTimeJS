export const DomFactory = {
  Attribute: (name, value) => {
    const attribute = document.createAttribute(name)
    attribute.value = value;
    return attribute;
  },
  Element: (type, attributes) => {
    const element = document.createElement(type, attributes);
    attributes.forEach(attribute => {
      element.setAttribute(attribute.name, attribute.value);
    });
    return element;
  },
  Input: (options) => {
    const initialValue = options.initialValue;
    const type = options.type
    const attributes = [
      {name: 'value', value: initialValue},
      {name: 'type', value: type},
    ];
    const input = DomFactory.Element('input', attributes);
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
    const list = document.createElement('ul');
    if(id)list.setAttribute('id', id);
    return list;
  },
  ListItem: (id) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', id);
    return listItem;
  },
  Button: (label) => {
    const button = document.createElement('button');
    button.innerText = label;
    return button;
  },
  Divider: (id) => {
    const divider = document.createElement('div');
    divider.setAttribute('id', id);
    return divider;
  }
};
