"use strict";

let icon = Symbol('icon');
let tank = {
  class: 'Warrior',
  role: 'Defence',
  hp: 336,
  mana: null,
  uniqueAbility: 'Shieldwall',
  [icon]: 'Axe',
};
let healer = {
  class: 'Priest',
  role: 'Support',
  hp: 101,
  mana: 584,
  uniqueAbility: 'Resurrection',
  [icon]: 'Cross',
};
let manaWeaver = {
  class: 'Mage',
  role: 'Damage',
  hp: 136,
  mana: 576,
  uniqueAbility: 'Inferno',
  [icon]: 'Staff',
};
let knight = {
  class: 'Paladin',
  role: 'Damage',
  hp: 243,
  mana: 112,
  uniqueAbility: 'Retribution',
  [icon]: 'Hammer',
};
let thief = {
  class: 'Rogue',
  role: 'Damage',
  hp: 201,
  mana: null,
  uniqueAbility: 'Shadowstrike',
  [icon]: 'Dagger',
};
let array = [tank, healer, manaWeaver, knight, thief];
console.log(array);
