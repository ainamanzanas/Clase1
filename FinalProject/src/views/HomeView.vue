<script>
import { mapState, mapActions } from 'pinia';
import TaskStore from '@/stores/tasks';
import UserStore from '@/stores/user';
import TaskList from '@/components/TaskList.vue';

export default {
  name: 'HomeView',
  components: {
    TaskList,
  }, 
  data() {
    return {
      newTaskTitle: '',
    }
  },
  computed: {
    ...mapState(TaskStore, ['tasksList']),
    ...mapState(UserStore, ['user'])
    },
  methods: {
    ...mapActions(TaskStore, ['_addNewTask','_fetchAllTasks']),
    ...mapActions(UserStore, ['SignOut']),
  },
  created() {
    this._fetchAllTasks()
  },
}
</script>

<template>
  <main class="homeView">
    <h1>Your Tasks List</h1>
    <TaskList />
  </main>
</template>

<style scoped>
.homeView {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
