import Character from '../Character';

test('name is not a string test', () => {
  function testName1() {
    return new Character(123, 'Bowerman', 25, 25);
  }

  expect(testName1).toThrow(new Error('ошибка name'));
});

test('name is lesser than two test', () => {
  function testName2() {
    return new Character('n', 'Bowerman', 25, 25);
  }

  expect(testName2).toThrow(new Error('ошибка name'));
});

test('name is bigger than ten test', () => {
  function testName3() {
    return new Character('namenamenam', 'Bowerman', 25, 25);
  }

  expect(testName3).toThrow(new Error('ошибка name'));
});

test('type is not a string test', () => {
  function testType1() {
    return new Character('name', 123, 25, 25);
  }

  expect(testType1).toThrow(new Error('ошибка type'));
});

test('type is not from types', () => {
  function testType2() {
    return new Character('name', 'player', 25, 25);
  }

  expect(testType2).toThrow(new Error('ошибка type'));
});
