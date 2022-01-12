<template>
  <div class="list-item">
    <div class="texts">
      <p v-if="!isEdit" class="toto_data">{{ itemData.todo }}</p>
      <input
        v-else
        class="edit-text"
        type="text"
        name="enter_todo"
        id="todo"
        v-model="todoDataEdit"
        placeholder="Edit Todo"
      />
      <p class="date_time">Date & Time : {{ itemData.date }}</p>
    </div>
    <div v-if="!isEdit" class="btns">
      <input
        class="update-btn"
        @click="editTodos(parseInt(itemData.id) - 1)"
        type="button"
        value="E"
        name="update_btn"
      />
      <input
        class="delete-btn"
        @click="deleteTodos(itemData.id)"
        type="button"
        value="X"
        name="delete_btn"
      />
    </div>
    <input
      v-else
      class="save-btn"
      @click="saveTodos(parseInt(itemData.id) - 1)"
      type="button"
      value="Save"
      name="save_btn"
    />
  </div>
</template>
<script>
export default {
  name: "TodoComponent",
  props: ["itemData"],
  data() {
    return {
      isEdit: false,
      todoDataEdit: null,
    };
  },
  methods: {
    deleteTodos(id) {
      try {
        this.$emit("deleteTodo", id);
      } catch (error) {
        console.log(error);
      }
    },
    editTodos() {
      try {
        this.isEdit = true;
        this.todoDataEdit = this.itemData.todo;
      } catch (error) {
        console.log(error);
      }
    },
    saveTodos(index) {
      try {
        this.$emit("editTodo", index, this.todoDataEdit);
        this.isEdit = false;
        this.todoDataEdit = null;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.todo-container .todoList .list-item .texts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.todo-container .todoList .list-item .btns {
  display: flex;
  gap: 10px;
}
.todo-container .todoList .list-item .btns .delete-btn {
  padding: 4px;
  height: 30px;
  width: 30px;
  color: white;
  background: rgb(207, 3, 3);
  cursor: pointer;
  border: none;
  border-radius: 50px;
}
.todo-container .todoList .list-item .btns .update-btn,
.save-btn {
  padding: 4px;
  height: 30px;
  width: 30px;
  color: white;
  background: rgb(0, 119, 40);
  cursor: pointer;
  border: none;
  border-radius: 50px;
}
.todo-container .todoList .list-item .save-btn {
  padding: 4px;
  height: 30px;
  width: 60px;
  color: white;
  background: rgb(0, 2, 133);
  cursor: pointer;
  border: none;
  border-radius: 50px;
}
.todo-container .todoList .list-item {
  display: flex;
  justify-content: space-between;
  text-align: start;
  align-items: center;
  background: rgb(204, 255, 219);
  padding: 8px;
  border-radius: 10px;
}
.todo-container .todoList .list-item .toto_data {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
}
.todo-container .todoList .list-item .edit-text {
  height: 30px;
  width: 300px;
  padding-inline: 10px;
  border: 2px solid green;
  border-radius: 20px;
  font-size: 15px;
  margin-bottom: 10px;
}
</style>