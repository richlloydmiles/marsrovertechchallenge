function Rover(x = 0, y = 0, orientation = 'N') {
  const orientations = {
    'N': (direction) => {
      return direction === 'L' ? 'W' : 'E'
    },
    'S': (direction) => {
      return direction === 'L' ? 'E' : 'W'
    },
    'E': (direction) => {
      return direction === 'L' ? 'N' : 'S'
    },
    'W': (direction) => {
      return direction === 'L' ? 'S' : 'N'
    },
  }

  const directions = {
    'N': (coordinates) => {
      const y = coordinates[1] + 1
      return [coordinates[0], y]
    },
    'S': (coordinates) => {
      const y = coordinates[1] - 1
      return [coordinates[0], y]
    },
    'E': (coordinates) => {
      const x = coordinates[0] + 1
      return [x, coordinates[1]]
    },
    'W': (coordinates) => {
      const x = coordinates[0] - 1
      return [x, coordinates[1]]
    },
  }

  this.move = function () {
    [x, y] = directions[orientation.toUpperCase()]([x, y])
  }

  this.turn = function (direction) {
    orientation = orientations[orientation.toUpperCase()](direction.toUpperCase())
  }

  this.getPosition = function () {
    return {
      x,
      y,
      orientation,
    }
  }
}

module.exports = Rover
