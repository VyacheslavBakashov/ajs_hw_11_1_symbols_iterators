import MagicCharacter from './MagicCharacter';

export default class Magician extends MagicCharacter {
  constructor(name, type) {
    super(name, type);
    this._attack = 10;
    this.defence = 40;
  }
}
