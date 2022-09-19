const app = Vue.createApp({
    data: () => {
        return {
            userInput: '',
            visible: true,
            inputBackgroundColor: '',
        }
    },
    computed: {
        paraClasses() {
            return {
                user1: this.userInput === 'user1',
                user2: this.userInput === 'user2',
                visible: this.visible,
                hidden: !this.visible,
            }
        },
        visibleClass() {
            return this.visible ? 'visible' : 'hidden';
        }
    },
    methods: {
        toggleVisible() {
            this.visible = !this.visible;
        }
    }
});

app.mount('#assignment');