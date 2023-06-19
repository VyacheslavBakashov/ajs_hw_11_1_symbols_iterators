import MagicCharacter from './MagicCharacter';

export default class Daemon extends MagicCharacter {
  constructor(name, type) {
    super(name, type);
    this._attack = 10;
    this.defence = 40;
  }
}
