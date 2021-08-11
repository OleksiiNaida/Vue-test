const App = {
   data: () => ({
      inputValue: '',
      todoListItem: [],
      completedListItem: [],
   }),
   methods: {
      addNewtask() {
         if(this.inputValue !== '') {
            this.todoListItem.push({taskName:this.inputValue, completed: false});
            this.inputValue = '';
         }
      },
      addCompletedtask(i, type) {
         if(this.todoListItem[i].completed) {
            this.completedListItem.push(this.todoListItem[i].taskName);
            this.todoListItem.splice(i, 1);
         }
      },
      deleteCmdTask(i) {
         this.completedListItem.splice(i, 1);
      }
   },
}



Vue.createApp(App).mount('#app');