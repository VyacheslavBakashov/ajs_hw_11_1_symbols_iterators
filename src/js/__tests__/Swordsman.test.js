import Swordsman from '../Swordsman';

test('check Swordsman', () => {
  const input = new Swordsman('new', 'Swordsman');
  const result = {
    name: 'new',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
    distanceAttack: 1,
  };

  expect(input).toEqual(result);
});
