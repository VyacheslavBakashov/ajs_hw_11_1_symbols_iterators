import Character from './Character';

export default class MagicCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this._stoned = false;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(status) {
    this._stoned = typeof status === 'boolean' ? status : this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let actualAttack = Math.round(this._attack * (1 - (this.distanceAttack - 1) / 10));
    if (this._stoned) {
      actualAttack -= Math.round(Math.log2(this.distanceAttack) * 5);
    }
    return actualAttack > 0 ? actualAttack : 0;
  }
}
