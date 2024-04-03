import '../static/css/index.css'
const chat = require('../static/imgs/we_common.jpg')
const img = new Image()
img.className = 'object-cover w-2/4'
img.src = chat

const imgContainer = document.getElementById('img')
imgContainer.appendChild(img)
