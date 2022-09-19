const app = Vue.createApp({
    data: () => {
        return {
            courseGoalA: 'Finish the course and learn Vue',
            courseGoalB: '<h2>Master Vue and build amazing apps</h2>',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const num = Math.random();
            if (num > 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');