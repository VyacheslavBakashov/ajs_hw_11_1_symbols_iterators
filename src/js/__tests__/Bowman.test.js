import Bowman from '../Bowman';

test('check Bowman', () => {
  const input = new Bowman('new', 'Bowman');
  const result = {
    name: 'new',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
    distanceAttack: 1,
  };
  expect(input).toEqual(result);
});
