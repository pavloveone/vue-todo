<template>
  <section class="users">
    <div class="userslist">
      <div class="userslist__username" v-for="(user, index) in users" :key="index">
        <h3>
          {{ user.name }}
        </h3>
        <img :src="todosImg" alt="edit" class="btn" @click="selectUser('todos', user)"/>
        <img :src="editImg" alt="edit" class="btn" @click="selectUser('info', user)"/>
      </div>
    </div>
    <user-modal
      :title="`Список дел ${formatName(selectedTodoUser?.name)}`"
      :tasks="selectedTodoUser?.todos"
      v-if="selectedTodoUser"
      @close="selectedTodoUser = null"
      @select="selectUser('info', selectedTodoUser)"
    />
    <user-info-modal
      :title="`Полная информация ${formatName(selectedEditUser?.name)}`"
      :info="selectedEditUser?.info"
      v-if="selectedEditUser"
      @close="selectedEditUser = null"
    />
  </section>
</template>

<script>
import { formatNameMixin } from '../mixins/mixin';
import editImg  from '@/assets/icons/edit-button.svg';
import todosImg from '@/assets/icons/details-button.svg';
import UserInfoModal from '../components/UserInfoModal.vue';
import UserModal from "../components/UserModal.vue";
import usersData from '../data/users.json';

export default {
  mixins: [formatNameMixin],
  data() {
    return {
      users: usersData,
      editImg: editImg,
      todosImg: todosImg,
      selectedTodoUser: null,
      selectedEditUser: null,
    };
  },
  methods: {
    selectUser(type, user) {
      if (type === 'todos') {
        this.selectedTodoUser = user;
      } else if (type === 'info') {
        this.selectedEditUser = user;
      }
    },
  },
  components: {
    UserModal,
    UserInfoModal
  }
  };
</script>

<style scoped>
.userslist {
  display: flex;
  flex-direction: column;
}
.users {
  display: flex;
}
.userslist__username {
  cursor: default;
  padding-bottom: 15px;
  display: flex;
  width: 150px;
  justify-content: space-around;
  align-items: center;
}
.btn {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>