/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
    constructor(att) {
        this.createdAt = att.createdAt;
        this.name = att.name;
        this.dimensions = att.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game`;
    };
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
    constructor(att) {
        super(att);
        this.healthPoints = att.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage`;
    };
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
    constructor(att) {
        super(att);
        this.team = att.team;
        this.weapons = att.weapons;
        this.language = att.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    };
}

class Villian extends Humanoid {
    constructor(att) {
        super(att);
    }

    backstab(enemy) {
        enemy.healthPoints -= 5;
        if (enemy.healthPoints > 0) {
            return `${this.name} wickedly backstabs ${enemy.name} for 5 dmg`;
        }
        else {
            return enemy.destroy();
        }
    }
}



class Hero extends Humanoid {
    constructor(att) {
        super(att);
    }

    slash(enemy) {
        enemy.healthPoints -= 7;
        if (enemy.healthPoints > 0) {
            return `${this.name} heroically slashes ${enemy.name} for 7 dmg`;
        }
        else {
            return enemy.destroy();
        }
    }
}




/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

// /*
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

const thief = new Villian({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 10,
    name: 'Leo',
    team: 'The Black Hand',
    weapons: [
        'Dagger',
        'Crossbow',
    ],
    language: 'Common Tongue',
});

const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 20,
    name: 'Clark',
    team: 'The White Hand',
    weapons: [
        'Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(thief.backstab(archer));//Leo wickedly backstabs Lilith for 5 dmg 
console.log(thief.backstab(archer));//Lilith was removed from the game
console.log(hero.slash(thief));//Clark heroically slashes Leo for 7 dmg
console.log(thief.backstab(hero));//Leo wickedly backstabs Clark for 5 dmg 
console.log(hero.slash(thief));//Leo was removed from the game
