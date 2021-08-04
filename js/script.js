const App = {
   data: () => ({
      inputValue: '',
      todoListItem: [],
      completedListItem: [],
   }),
   methods: {
      addNewtask() {
         if(this.inputValue !== '') {
            this.todoListItem.push(this.inputValue);
            this.inputValue = '';
         }
      },
      addCompletedtask(i) {
         this.completedListItem.push(this.todoListItem[i]);
         this.todoListItem.splice(i, 1);
      },
      deleteCmdTask(i) {
         this.completedListItem.splice(i, 1);
      }
   }
}



Vue.createApp(App).mount('#app');