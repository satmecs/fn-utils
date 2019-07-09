import pipe from '../pipe'

const inc = x => x + 1
const double = x => x * 2

const incAndDouble = pipe(
  inc,
  double
)

test('First increment and then double the values', () => {
  expect(incAndDouble(3)).toBe(8)
})