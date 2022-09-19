const app = Vue.createApp({
    data: () => {
        return {
            userInput: '',
            visible: true,
            backgroundColor: '',
        }
    },
    computed: {
        firstParagraphClass() {
            return this.userInput;
        },
        visibleClass() {
            return this.visible ? 'visible' : 'hidden';
        },
        backgroundColor() {
            return 'background-color: ' + this.backgroundColor;
        }
    },
    methods: {
        inputClass(event) {
            this.userInput = event.target.value;
        },
        toggleVisible() {
            this.visible = !this.visible;
        },
        inputInlineStyle(event) {
            this.backgroundColor = event.target.value;
        }
    }
});

app.mount('#assignment');