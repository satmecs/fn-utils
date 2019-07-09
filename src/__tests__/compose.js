import  compose from "../compose";

const inc = x => x + 1
const double = x => x * 2

const doubleAndInc = compose(inc, double) 

test('Compose runs right to left', () => {
  expect(doubleAndInc(3)).toBe(7)
})