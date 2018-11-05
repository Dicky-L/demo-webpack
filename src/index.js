import _ from 'lodash'
import printMe from './print.js'

function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')

  // Lodash 现在通过本script中导入
  element.innerHTML = _.join(['Hello', 'webpack', 'webpack-dev'], ' ')

  btn.innerHTML = 'Click me and check the console'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
