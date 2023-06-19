import Daemon from '../Daemon';

test('check Daemon', () => {
  const input = new Daemon('new', 'Daemon');
  const result = {
    name: 'new',
    type: 'Daemon',
    health: 100,
    level: 1,
    _attack: 10,
    defence: 40,
    _stoned: false,
    distanceAttack: 1,
  };

  expect(input).toEqual(result);
});

test('check attack for stoned Magician', () => {
  const character = new Daemon('new', 'Daemon');
  character.stoned = true;
  character.attack = 100;
  character.distanceAttack = 2;
  const input = character.attack;

  expect(input).toEqual(85);
});

test('check attack for distance Magician', () => {
  const character = new Daemon('new', 'Daemon');
  character.distanceAttack = 4;
  const input = character.attack;

  expect(input).toEqual(7);
});

test('check wrong type of stoned status for Magician', () => {
  const character = new Daemon('new', 'Daemon');
  character.stoned = 'true';
  const input = character.stoned;
  expect(input).toEqual(false);
});

test('check negative attack for Magician', () => {
  const character = new Daemon('new', 'Daemon');
  character.distanceAttack = 10;
  character.stoned = true;
  const input = character.attack;
  expect(input).toEqual(0);
});
