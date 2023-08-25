export const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type, attack, defence, level = 1, health = 100) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('ошибка name');
    }

    if (typeof type === 'string' && types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('ошибка type');
    }

    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
