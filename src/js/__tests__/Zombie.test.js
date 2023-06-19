import Zombie from '../Zombie';

test('check Zombie', () => {
  const input = new Zombie('new', 'Zombie');
  const result = {
    name: 'new',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
    distanceAttack: 1,
  };

  expect(input).toEqual(result);
});
