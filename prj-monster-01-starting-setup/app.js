function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHp: 100,
            playerHp: 100,
            combatLog: [],
            currentRound: 0,
            winner: null
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHp <= 0) {
                return {
                    width: '0%'
                }
            } else {
                return {
                    width: this.monsterHp + '%'
                }
            }

        },
        playerBarStyles() {
            if (this.playerHp <= 0) {
                return {
                    width: '0%'
                }
            } else {
                return {
                    width: this.playerHp + '%'
                }
            }

        },
        specialAttackAvailable() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHp(value) {
            if (value <= 0 && this.monsterHp <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHp(value) {
            if (value <= 0 && this.playerHp <= 0) {
                this.winner = 'draw';
            } else if (value < 0) {
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(6, 12);
            this.monsterHp -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            this.currentRound++;
            const attackValue = getRandomValue(8, 15);
            this.playerHp -= attackValue
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(12, 30);
            this.monsterHp -= attackValue;
            this.attackPlayer();
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20);
            if (this.playerHp + healValue > 100) {
                this.playerHp = 100;
            } else {
                this.playerHp += healValue;
            }
            this.attackPlayer();
        },
        startGame() {
            this.playerHp = 100;
            this.monsterHp = 100;
            this.winner = null;
            this.currentRound = 0;
        }
    }
});

app.mount('#game');