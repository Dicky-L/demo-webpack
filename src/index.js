import _ from 'lodash'
import "./style.css"
import myImage from "./icon_h5.png"

function component() {
  var element = document.createElement('div');

  // Lodash 现在通过本script中导入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = myImage;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());