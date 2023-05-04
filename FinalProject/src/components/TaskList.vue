<template>
    <div class="task-container">
      <div>
        <div class="row">
          <input
            type="text"
            placeholder="New task"
            v-model="taskName"
            v-on:keyup.enter="addTask()"
          />
          <button type="submit" @click="addTask()">Add Task</button>
          <br>
        </div>
      </div>
      <div class="row2">
        <div>
          <div v-if="tasks.length === 0">
            <p>You don't have any task yet. Add some!</p>
          </div>
          <ul class="list">
            <li class="list-item" v-for="(task, index) in tasks" v-bind:key="index">
              <span
                v-bind:class="[task.status ? 'task-completed' : '', 'cursor']"
                v-on:click="updateTask(task)"
              >
                <i v-bind:class="[task.status ? 'fas fa-check-circle' : 'far fa-circle']"></i>
              </span>
              <h2 v-if="!task.edit">{{ task.name }}</h2>
              <input
                type="text"
                v-model="task.name"
                v-if="task.edit"
                v-on:keyup.enter="updateTaskName(task)"
              />
              <span
                class="pointer edit"
                v-on:click="toggleEditTask(task)"
              >
                <i class="fas fa-pen"></i>
              </span>
              <span class="pointer danger" v-on:click="deleteTask(index)">
                <i class="fas fa-trash-alt"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [],
        taskName: '',
      };
    },
    methods: {
      addTask() {
        const task = {
          name: this.taskName,
          status: false,
          edit: false,
        };
        this.tasks.push(task);
        this.taskName = '';
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
      updateTask(task) {
        task.status = !task.status;
      },
      toggleEditTask(task) {
        task.edit = !task.edit;
      },
      updateTaskName(task) {
        task.edit = false;
      },
    },
  };
  </script>
  
  <style scoped>

  input {
    width: 70%;
  }

  button {
    background-color: black;
    color: white;
    width: 30%;
    padding: 8px;
    margin-left: 10px;
    border-radius: 5%;
  }

  .row {
    display: flex;
    flex-direction: row;
    width: 150%;
    margin: 20px 0px 20px 0px;
  }

  ul {
    list-style-type: none;
  }
  
  .pointer {
    cursor: pointer;
  }
  
  .task-completed {
    color: green;
  }
  
  .danger {
    color: red;
  }
  </style>
  