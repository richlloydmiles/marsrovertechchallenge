
const Plateau = require('../Plateau/Plateau')
const Rover = require('../Rover/Rover')

let utils = {}
utils.readline = {}

utils.getRoverState = (rover, plateau, index) => {
  if (rover.getPosition().x > plateau.right) {
    console.log(`Rover No.${index} has moved off the RIGHT of the plateau`)
  }

  if (rover.getPosition().x < plateau.left) {
    console.log(`Rover No.${index} has moved off the LEFT of the plateau`)
  }

  if (rover.getPosition().y < plateau.bottom) {
    console.log(`Rover No.${index} has moved off the BOTTOM of the plateau`)
  }

  if (rover.getPosition().y > plateau.top) {
    console.log(`Rover No.${index} has moved off the TOP of the plateau`)
  }

  return `${rover.getPosition().x} ${rover.getPosition().y} ${rover.getPosition().orientation}`
}

utils.getPlateau = async () => {
  const sides = await new Promise((resolve) => {
    utils.readline.question('Please enter the dimensions for the plateau: ', sides => resolve(sides))
  })

  const [top, right, bottom, left] = sides.split(' ')
  return new Plateau(parseInt(top, 10), parseInt(right, 10), parseInt(bottom, 10), parseInt(left, 10))
}

utils.getRovers = async () => {
  let rovers = []
  while (true) {
    let rover = null
    rover = await new Promise((resolve) => {
      utils.readline.question('Enter the position of a rover (enter "N" to stop adding):', position => resolve(position))
    })

    if (rover === 'N' || rover.toLowerCase() === 'no') {
      break
    }

    const [x, y, orientation] = rover.split(' ')
    let roverInstance = new Rover(parseInt(x, 10), parseInt(y, 10), orientation)
    let position = await new Promise((resolve) => {
      utils.readline.question(`Enter the movement sequence of rover No.${rovers.length}:`, position => resolve(position))
    })

    position.split('').forEach(movement => utils.moveRover(movement, roverInstance))
    rovers.push(roverInstance)
  }

  return rovers
}

utils.moveRover = (movement, rover) => {
  if (movement === 'M') {
    rover.move()
  } else {
    rover.turn(movement)
  }
}

utils.start = async () => {
  utils.readline = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const plateau = await utils.getPlateau()
  const rovers = await utils.getRovers()
  rovers.forEach((rover, index) => console.log(utils.getRoverState(rover, plateau, index)))
  await utils.end()
}

utils.end = async () => {
  const restart = await new Promise((resolve) => {
    utils.readline.question('Would you like to try again? (Y/N): ', answer => resolve(answer))
  })

  utils.readline.close()

  if (restart === 'Y' || restart.toLowerCase() === 'yes') {
    await utils.start()
  }
}

module.exports = utils
