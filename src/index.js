import _ from 'lodash'

function component() {
  var element = document.createElement('div');

  // Lodash 现在通过本script中导入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());