const app = Vue.createApp({
    data() {
        return {
            monsterHp: 100,
            playerHp: 100,
            combatLog: [],
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
        }
    },
    methods: {
        attackMonster() {
            const attackValue = Math.floor(Math.random() * (12 - 6)) + 5;
            this.monsterHp -= attackValue;
            this.combatLog.push('Atacao');
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = Math.floor(Math.random() * (15 - 8)) + 5;
            this.playerHp -= attackValue
        }
    }
});

app.mount('#game');