// test function takes two argument.
//  1) String
//  2) call back function

import { sum } from '../sum'

test('sun function should calculate the sum of two numbers', () => {
  const result = sum(3, 4)

  //Assertion
  expect(result).toBe(7)
})
