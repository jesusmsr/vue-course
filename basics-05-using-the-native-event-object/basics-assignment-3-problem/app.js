const app = Vue.createApp({
    data: () => {
        return {
            counter: 0,
        }
    },
    computed: {
        message() {
            if (this.counter < 37) {
                return 'Not there yet!';
            } else if (this.counter > 37) {
                return 'Too much!';
            } else {
                return this.counter;
            }
        }
    },
    watch: {
        message(value) {
            const that = this;
            setTimeout(function () {
                that.counter = 0;
            }, 5000);
        }
    },
    methods: {
        add(event, value) {
            this.counter = this.counter + value;
        }
    }
});

app.mount('#assignment');