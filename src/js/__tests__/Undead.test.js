import Undead from '../Undead';

test('check Undead', () => {
  const input = new Undead('new', 'Undead');
  const result = {
    name: 'new',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
    distanceAttack: 1,
  };

  expect(input).toEqual(result);
});
