const app = Vue.createApp({
    data: () => {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    computed: {
        boxAClasses() {
            return { active: this.boxASelected }
        },
    },
    methods: {
        boxSelected(box) {
            console.log('a');
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else if (box === 'C') {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});

app.mount('#styling');