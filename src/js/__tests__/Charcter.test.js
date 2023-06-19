import Character, {
  nameError, typeError, damageError, levelUpError,
} from '../Character';
import Swordsman from '../Swordsman';

const forTest = [
  [['n', 'Bowman'], nameError],
  [[1, 'Bowman'], nameError],
  [['new', 'Boman'], typeError],
];

test.each(forTest)(
  'check Character nameError and typeError',

  (obj, res) => {
    function checkErrorName() {
      return new Character(...obj);
    }
    expect(checkErrorName).toThrow(new Error(res));
  },
);

test('Check valid level up', () => {
  const input = new Swordsman('new', 'Swordsman');
  const expected = {
    name: 'new',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
    distanceAttack: 1,
  };
  input.levelUp();
  expect(input).toEqual(expected);
});

test('Check level up error', () => {
  const input = new Swordsman('new', 'Swordsman');
  const expected = levelUpError;
  input.health = 0;
  expect(() => input.levelUp()).toThrow(expected);
});

test('Chack valid damage', () => {
  const input = new Swordsman('new', 'Swordsman');
  const expected = {
    name: 'new',
    type: 'Swordsman',
    health: 64,
    level: 1,
    attack: 40,
    defence: 10,
    distanceAttack: 1,
  };
  input.damage(40);
  expect(input).toEqual(expected);
});

test('Damage error', () => {
  const input = new Swordsman('new', 'Swordsman');
  const expected = damageError;
  input.health = -1;
  expect(() => input.damage(20)).toThrow(expected);
});
