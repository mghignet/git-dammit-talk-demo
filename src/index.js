'use strict'


function drawCar() {
	return `
           ▄████████████▄
       ▄██▓▓▓▓▓▓████▓▓▓▓▓▓▓▓▄
     ▄██▓▓▓▓▓▓▓▓████▓▓▓▓▓▓▓▓▓▓▄
 ▄▀███▓▓▓▓▓▓▓▓▓▓████▓▓▓▓▓▓▓▓▓▓▓████████████▄
▄▀█████████████████ ███████████████████████▓▓
██████▀ ▄██▄ ▀█████ ███████████▀ ▄██▄ ▀████▓▓
 █████ ██████ █GIT█ █DAMMIT!███ ██████ ███
    ▀▀▀ ▀██▀ ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ ▀██▀ ▀▀
`
}

function setColor(car, color) {
  const resetColor = '\x1b[0m'
  return color + car + resetColor
}

function getCarHeight(car) {
  return car.split(/\r\n|\r|\n/).length - 1
}

function animateCar(car) {
  const colors = [
    '\x1b[31m',
    '\x1b[32m',
    '\x1b[33m',
    '\x1b[34m',
    '\x1b[35m',
    '\x1b[36m',
    '\x1b[37m',
  ]

  let colorIndex = 0
  process.stdout.write('\r' + car)

  return setInterval(function () {
    process.stdout.moveCursor(0, -getCarHeight(car));
    process.stdout.clearScreenDown()

    const coloredCar = setColor(car, colors[colorIndex++])
    process.stdout.write(coloredCar)

    colorIndex = colorIndex % colors.length
  }, 100);
}

console.log('Hello guys,')
console.log('Look at my car!')
console.log('...')

const car = drawCar()
animateCar(car)

