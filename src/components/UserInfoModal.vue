<template>
  <modal :title="title">
    <template v-slot:content>
      <template v-if="info">
        <form class='userinfo-form' v-for="(data, index) of info" :key="index">
          <label :for='data.fullname'>Полное имя: 
            <input :value='data.fullname' class='input-container__input' type='text' :name='data.fullname' />
          </label>
          <label :for='data.email'>Электронный адрес:
            <input class='input-container__input' type='email' :value='data.email' :name='data.email' />
          </label>
          <label :for='data.phone'>Номер телефона
            <input class='input-container__input' type='tel' :value='data.phone' :name='data.phone' />
          </label>
        </form>
      </template>
      <template v-else>
        <span>No data available</span>
      </template>
    </template>
  </modal>
</template>

<script>
import Modal from './Modal.vue';
export default {
  props: {
    title: String,
    info: Object
  },
  components: {
    Modal
  }
};
</script>

<style scoped>
.userinfo-form {
  display: flex;
  flex-direction: column;
}
.input-container__input {
  border-radius: 5px;
  border: none;
}
.input-container__btn-edit {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>