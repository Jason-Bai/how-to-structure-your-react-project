const should = require('should');

describe('Array', () => {
  describe('#indexOf', () => {
    it('should return -1 when 0 not in [1, 2]', () => {
      should([1, 2].indexOf(0)).be.eql(-1)
    })
  })
})
