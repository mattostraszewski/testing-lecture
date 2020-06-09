const { sum, sayHello } = require('../functions')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})


test('sayHello says Hello', () => {
  expect(sayHello()).toBe('Hello')
})


test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})


test('expect true to truthy', () => {
  expect(true).toBeTruthy()
})

test('expect true to truthy', () => {
  expect(0).toBeTruthy()
}) //fails


let names = ['Bruce', 'Tony', 'Steve', 'Clint']

test('Expect Steve to be in array', () => {
  expects(names).toContain('Steve')
})


test('Add 7 to 2 to equal 9', () => {
  expect(sum(7, 2)).toBe(9)
  expect(sum(7, 2)).not.toBeNaN()
})


test('names contains tony but not thor', () => {
  expect(names).toContain('Tony')
  expect(names).not.toContain('Thor')
})
