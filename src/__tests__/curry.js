import curry from '../curry'

const add = curry((x, y) => (x+y))
const add2 = add(2)

test('Curried version of add works as expected', () => {
  expect(add2(3)).toBe(5)
})