import _ from 'lodash'
import printMe from './print.js'
import './style.css'

console.log('npm_package_version:',process.env.npm_package_version)
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

// document.body.appendChild(component())
let element = component()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./', function() {
    console.log('Accepting the updated printMe module')
    // printMe()
    document.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
