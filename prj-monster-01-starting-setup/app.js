const app = Vue.createApp({
    data() {
        return {
            monsterHp: 100,
            playerHp: 100,
            combatLog: [],
            specialAttackCounter: 0,
        }
    },
    computed: {
        monsterBarStyles() {
            return {
                width: this.monsterHp + '%'
            }
        },
        playerBarStyles() {
            return {
                width: this.playerHp + '%'
            }
        },
        specialAttackAvailable() {
            if (this.specialAttackCounter > 0) {
                return true;
            } else if (this.specialAttackCounter == 0) {
                return false;
            }
        }
    },
    methods: {
        attackMonster() {
            this.specialAttackCounter -= 1;
            const attackValue = Math.floor(Math.random() * (12 - 6)) + 5;
            this.monsterHp -= attackValue;
            this.combatLog.push('Atacao');
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = Math.floor(Math.random() * (15 - 8)) + 5;
            this.playerHp -= attackValue
        },
        specialAttackMonster() {
            this.specialAttackCounter = 3;
            const attackValue = Math.floor(Math.random() * (30 - 12)) + 5;
            this.monsterHp -= attackValue;
            this.attackPlayer();
        }
    }
});

app.mount('#game');