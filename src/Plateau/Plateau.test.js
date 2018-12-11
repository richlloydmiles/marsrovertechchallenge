const chai = require('chai')
const assert = chai.assert

const Plateau = require('./Plateau')

describe('Plateau', function () {
  describe('setSides', () => {
    it('should correctly set the dimensions of a Plateau when all co-ordinates are given', () => {
      // when ... a new plateau is created
      const plateau = new Plateau(1, 2, 3, 5)

      // then
      // ... the top side should be as expected
      assert.equal(
        plateau.top, 1
      )

      // ... the right side should be as expected
      assert.equal(
        plateau.right, 2
      )

      // ... the bottom side should be as expected
      assert.equal(
        plateau.bottom, 3
      )

      // ... the left side should be as expected
      assert.equal(
        plateau.left, 5
      )
    })

    it('should correctly set the dimensions of a Plateau when only the top and right co-ordinates are given', () => {
      // when ... a new plateau is created
      const plateau = new Plateau(1, 2)

      // then
      // ... the top side should be as expected
      assert.equal(
        plateau.top, 1
      )

      // ... the right side should be as expected
      assert.equal(
        plateau.right, 2
      )

      // ... the bottom side should be as expected
      assert.equal(
        plateau.bottom, 0
      )

      // ... the left side should be as expected
      assert.equal(
        plateau.left, 0
      )
    })
  })
})

