const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
const nameError = 'Имя должно быть строкой длиной от 2 до 10 символов';
const typeError = 'Неправильный тип';
const levelUpError = 'Нельзя повысить уровень умершего';
const damageError = 'Уже мертв';

class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length <= 10 && name.length >= 2) {
      this.name = name;
    } else {
      throw new Error(nameError);
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error(typeError);
    }
    this.health = 100;
    this.level = 1;
    this.distanceAttack = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error(levelUpError);
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error(damageError);
    }
  }
}

export default Character;
export {
  nameError, typeError, levelUpError, damageError,
};
