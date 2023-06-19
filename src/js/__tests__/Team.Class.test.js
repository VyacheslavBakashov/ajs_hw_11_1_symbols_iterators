import Team from '../TeamClass';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Undead from '../Undead';

const character1 = new Bowman('new1', 'Bowman');
const character2 = new Swordsman('new2', 'Swordsman');
const character3 = new Undead('new3', 'Undead');
const character4 = new Undead('new4', 'Undead');

test('Successful character adding', () => {
  const inp = new Team();
  inp.add(character1);
  const expected = { members: [new Bowman('new1', 'Bowman')] };
  expect(inp).toEqual(expected);
});

test('Unsuccessful character adding', () => {
  const inp = new Team();
  inp.add(character1);
  expect(() => inp.add(character1)).toThrow('Такой персонаж уже в команде');
});

test('Characters array adding', () => {
  const inp = new Team();
  inp.addAll(character1, character2, character3, character4);
  const expected = { members: [character1, character2, character3] };
  expect(inp).toEqual(expected);
});

test('Team iteration', () => {
  const inp = new Team(character1, character2, character3);
  const expected = [character1, character2, character3];
  let i = 0;

  for (const char of inp) {
    expect(char).toEqual(expected[i]);
    i++;
  }
});
