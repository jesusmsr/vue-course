const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: ['Finish the course!'],
    };
  },
  methods: {
    addGoal(){
      this.goals.push(enteredGoalValue);
    }
  }
});

app.mount('#user-goals');
