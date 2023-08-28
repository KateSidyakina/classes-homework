import Character from '../Character';

test('name is not a string test', () => {
  function testName1() {
    return new Character(123, 'Bowerman');
  }

  expect(testName1).toThrow(new Error('ошибка name'));
});

test('name is lesser than two test', () => {
  function testName2() {
    return new Character('n', 'Bowerman');
  }

  expect(testName2).toThrow(new Error('ошибка name'));
});

test('name is bigger than ten test', () => {
  function testName3() {
    return new Character('namenamenam', 'Bowerman');
  }

  expect(testName3).toThrow(new Error('ошибка name'));
});

test('type is not a string test', () => {
  function testType1() {
    return new Character('name', 123);
  }

  expect(testType1).toThrow(new Error('ошибка type'));
});

test('type is not from types', () => {
  function testType2() {
    return new Character('name', 'player');
  }

  expect(testType2).toThrow(new Error('ошибка type'));
});
