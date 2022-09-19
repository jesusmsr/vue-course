const app = Vue.createApp({
    data: () => {
        return {
            outputA: '',
            outputB: '',
        }
    },
    methods: {
        showAlert() {
            alert('Im an alert!');
        },
        registerInputA(event) {
            this.outputA = event.target.value;

        },
        registerInputB(event) {
            this.outputB = event.target.value;
        }
    }
});

app.mount('#assignment');