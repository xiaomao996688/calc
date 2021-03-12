// @ts-nocheck
const  calc  = require('../../src/index.js')

describe('test calc minus ', ()=> {
  test ('argument one and callback this', ()=> {
    expect(calc().minus(1)).toBe(1)
  })
  test ('two Positive number ', ()=> {
    expect(calc().minus(1, 1)).toBe(0)
  })
  test ('Two decimals', ()=> {
    expect(calc().minus(0.1, 0.01)).toBe(0.09)
  })
  test ('negative number ', ()=> {
    expect(calc().minus(0.1, -10.01)).toBe(10.11)
  })
  test ('More different decimal integer operations', ()=> {
    // expect(calc().minus(0.1, -10.01, 10, -23.1111, 122222)).toBe(-12198.7789)
    // const one = calc().minus(0.1, -10.01, 10)
    // const two = calc().minus(one, -23.111)
    // const three = calc().minus(two, 122222)
    // expect(three).toBe(-122198.779)
    // const four = calc().minus(0.1, -10.01, 10, -23.1111, 122222)
    // console.log(four)
    expect(calc().minus(0.1, -10.01, 10, -23.1111, 122222)).toBe(-122198.7789)
  })
})
