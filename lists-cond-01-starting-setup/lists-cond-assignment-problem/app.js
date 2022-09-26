const app = Vue.createApp({
    data() {
        return {
            taskText: '',
            tasks: [],
            showList: true
        }
    },
    computed: {
        hideLabel() {
            return this.showList ? 'Hide list' : 'Show list';
        }
    },
    methods: {
        addTask() {
            if (this.taskText != '') {
                this.tasks.push(this.taskText);
            }
        },
        toggleList() {
            this.showList = !this.showList;
        }
    }
});

app.mount('#assignment');