// Tom & Jerry
/**
 * Name: tên nhân vật
 * Health / HP: máu
 * Attack power/ATK: tấn công
 * attack(): Hàm tán công
 * isAlive(): Hàm kiểm tra sống
 * defense: phòng thủ
 */

function Character(name, hp, atk, defense, speed, counterAttack) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defense = defense;
    this.speed = speed;
    this.counterAttack = counterAttack;
    this.attack = function (target) {
        const damage = Math.max(this.atk - target.defense, 0);
        target.hp -= damage;
        console.log(
            `${this.name} tấn công ${target.name}, gây ra ${damage} sát thương. ${target.name} còn lại ${target.hp} máu.`
        );

        if (target.isAlive() && Math.random() < target.counterAttack) {
            const counterDamage = Math.max(target.atk - this.defense, 0);
            this.hp -= counterDamage;
            console.log(
                `${target.name} PHẢN công ${this.name}, gây ra ${counterDamage} sát thương. ${this.name} còn lại ${this.hp} máu.`
            );
        }
    };
    this.isAlive = function () {
        return this.hp > 0;
    };
}

function battleRound(attacker, defender) {
    attacker.attack(defender);
    if (defender.isAlive() && attacker.isAlive()) defender.attack(attacker);
}

function battle(char1, char2) {
    let round = 1;

    while (char1.isAlive() && char2.isAlive()) {
        console.log(`Round ${round}:`);

        if (char1.speed > char2.speed) {
            battleRound(char1, char2);
        } else if (char1.speed < char2.speed) {
            battleRound(char2, char1);
        } else {
            if (Math.random() > 0.5) {
                battleRound(char1, char2);
            } else {
                battleRound(char2, char1);
            }
        }

        round++;
    }

    const winner = char1.isAlive() ? char1 : char2;
    console.log(`${winner.name} wins!`);
    return winner;
}

// Tạo 2 nhân vật để tham gia trận chiến
const tom = new Character("Tom", 1000, 50, 5, 30, 0.5);
const jerry = new Character("Jerry", 500, 20, 20, 30, 0.2);

// console.log("tom: ", tom);
// console.log("jerry: ", jerry);

// Bắt đầu trận đấu
battle(tom, jerry);
