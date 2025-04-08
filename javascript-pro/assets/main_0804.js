// Tom & Jerry
/**
 * Name: tên nhân vật
 * Health / HP: máu
 * Attack power/ATK: tấn công
 * attack(): Hàm tán công
 * isAlive(): Hàm kiểm tra sống
 * defense: phòng thủ
 */

// Cách 1:
// const tom = {
//     name: "Tom",
//     hp: 1000,
//     atk: 50,
//     defense: 5,
//     attack(target) {
//         const damage = Math.max(this.atk - target.defense, 0);
//         target.hp -= damage;
//         console.log(
//             `${this.name} "hiếp dâm" ${target.name}, gây ${damage} sát thương. ${target.name} còn ${target.hp} máu!`
//         );
//     },
//     isAlive() {
//         return this.hp > 0;
//     },
// };

// const jerry = {
//     name: "Jerry",
//     hp: 500,
//     atk: 20,
//     defense: 20,
//     attack(target) {
//         const damage = Math.max(this.atk - target.defense, 0);
//         target.hp -= damage;
//         console.log(
//             `${this.name} "hiếp dâm" ${target.name}, gây ${damage} sát thương. ${target.name} còn ${target.hp} máu!`
//         );
//     },
//     isAlive() {
//         return this.hp > 0;
//     },
// };

// Cách 2: Tạo constructor
function Character(name, hp, atk, defense) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defense = defense;
    this.attack = (target) => {
        const damage = Math.max(this.atk - target.defense, 0);
        target.hp -= damage;
        console.log(
            `${this.name} tương tác vật lý lên ${target.name}, gây ${damage} sát thương. ${target.name} còn ${target.hp} máu!!!`
        );
    };
    this.isAlive = () => {
        return this.hp > 0;
    };
}

const tom = new Character("Tom", 1000, 50, 5);
const jerry = new Character("Jerry", 750, 20, 20);

// Cho 2 nhân vật tương tác nhau:
let round = 1;
while (tom.isAlive() && jerry.isAlive()) {
    console.log(`Round ${round}`);
    if (round % 2 === 0) {
        tom.attack(jerry);
    } else {
        jerry.attack(tom);
    }
    round++;
}

if (tom.isAlive()) {
    console.log(`Tom win!`);
} else {
    console.log(`Jerry win!`);
}
