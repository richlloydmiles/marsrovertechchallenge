const chai = require('chai')
const assert = chai.assert

const Rover = require('./Rover')

describe('Rover', function () {
  describe('initialize, getPosition', () => {
    it('should correctly set the parameters for a Rover', () => {
      // when ... a new rover is created
      const rover = new Rover(1, 2, 'E')

      // then ... position is as expected
      assert.deepEqual(
        rover.getPosition(),
        {x: 1, y: 2, orientation: 'E'}
      )
    })

    it('should correctly set the parameters for a Rover when none are specified', () => {
      // when ... a new rover is created with no parameters specified
      const rover = new Rover()

      // then ... position is as expected
      assert.deepEqual(
        rover.getPosition(),
        {x: 0, y: 0, orientation: 'N'}
      )
    })
  })

  describe('turn', () => {
    it('should turn a rover to an orientation as expected', () => {
      // given ... a new rover is created
      const rover = new Rover(1, 2, 'N')

      // when ... we turn the rover to the left
      rover.turn('L')

      // then ... the new orientation is as expected
      assert.deepEqual(
        rover.getPosition(),
        {x: 1, y: 2, orientation: 'W'}
      )
    })

    it('should turn a rover to multiple orientations as expected', () => {
      // given ... a new rover is created
      const rover = new Rover(1, 2, 'N')

      // when ... we turn the rover multiple times
      rover.turn('L')
      rover.turn('L')
      rover.turn('L')
      rover.turn('L')
      rover.turn('R')

      // then ... the new orientation is as expected
      assert.deepEqual(
        rover.getPosition(),
        {x: 1, y: 2, orientation: 'E'}
      )
    })
  })

  describe('move', () => {
    it('should move a rover to a new position as expected', () => {
      // given ... a new rover is created
      const rover = new Rover(0, 0, 'N')

      // when ... we move the rover
      rover.move()

      // then ... the orientation and position is as expected
      assert.deepEqual(
        rover.getPosition(),
        {x: 0, y: 1, orientation: 'N'}
      )
    })

    it('should move a rover to a new position multiple times as expected', () => {
      // given ... a new rover is created
      const rover = new Rover(0, 0, 'N')

      // when ... we move the rover multiple times
      rover.move()
      rover.move()
      rover.move()
      // then ... the orientation and position is as expected
      assert.deepEqual(
        rover.getPosition(),
        {x: 0, y: 3, orientation: 'N'}
      )
    })
  })

  describe('move, turn', () => {
    it('should turn and move a rover as expected', () => {
      // given ... a new rover is created
      const rover = new Rover(0, 0, 'N')

      // when ... we move the rover
      rover.move()
      rover.turn('L')
      rover.turn('L')
      rover.move()
      rover.move()
      rover.move()

      // then ... the orientation and position is as expected
      assert.deepEqual(
        rover.getPosition(),
        {x: 0, y: -2, orientation: 'S'}
      )
    })
  })
})

