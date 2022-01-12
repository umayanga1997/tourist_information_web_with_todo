<template>
  <div class="todo-container">
    <h2>Todo List</h2>
    <br />
    <div class="add-section">
      <input
        class="add-text"
        type="text"
        name="enter_todo"
        id="todo"
        v-model="todoDataAdd"
        placeholder="Enter Todo"
      />
      <input
        class="add-btn"
        @click="addTodo"
        type="button"
        value="Add"
        name="add_btn"
      />
      <input
        class="delete-all-btn"
        @click="deleteAllTodos"
        type="button"
        value="Delete"
        name="delete_all_btn"
      />
    </div>
    <br />
    <div class="todoList">
      <TodoCard
        v-for="item in todoList"
        :key="item.id"
        :itemData="item"
        @deleteTodo="deleteTodos"
        @editTodo="editTodos"
      />
    </div>
    <br />
  </div>
</template>
<script>
import moment from "moment";
import TodoCard from "@/components/Todo_Card.vue";

export default {
  name: "ToDo",
  data() {
    return {
      todoList: [],
      todoDataAdd: null,
    };
  },
  components: {
    TodoCard,
  },
  methods: {
    addTodo() {
      try {
        if (this.todoDataAdd != null && this.todoDataAdd != "") {
          this.todoList.push({
            id: this.todoList.length + 1,
            todo: this.todoDataAdd,
            date: moment(Date()).format("MM-DD-YYYY hh:mm A"),
          });
        } else {
          alert("Todo data is empty. Please add a data.");
        }
      } catch (error) {
        console.log(error);
      }
    },
    deleteAllTodos() {
      try {
        if (this.todoList.length != 0) {
          this.todoList = [];
        } else {
          alert("Todo data list is empty.");
        }
      } catch (error) {
        console.log(error);
      }
    },
    deleteTodos(id) {
      try {
        const index = this.todoList.findIndex((item) => {
          return item.id === id;
        });
        this.todoList.splice(index, 1);
      } catch (error) {
        console.log(error);
      }
    },
    editTodos(index, todo) {
      try {
        this.todoList[index].todo = todo;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.todo-container {
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-container .add-section .add-text {
  height: 30px;
  width: 300px;
  padding-inline: 10px;
  border: 2px solid green;
  border-radius: 20px;
  font-size: 15px;
}

.todo-container .add-section .add-btn {
  margin-left: 6px !important ;
  height: 35px;
  padding-inline-end: 20px;
  padding-inline-start: 20px;
  cursor: pointer;
  text-align: center !important;
  /* border: 2px solid green; */
  border: none;
  border-radius: 20px;
  font-size: 15px;
  background: rgb(7, 0, 102);
  color: white;
}

.todo-container .add-section .delete-all-btn {
  margin-left: 6px !important ;
  height: 35px;
  padding-inline-end: 20px;
  padding-inline-start: 20px;
  cursor: pointer;
  text-align: center !important;
  border: none;
  /* border: 2px solid green; */
  border-radius: 20px;
  font-size: 15px;
  background: rgb(207, 3, 3);
  color: white;
}
.todo-container .todoList {
  width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 10px;
}
</style>
