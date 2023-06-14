<template>
  <modal :title="title">
    <template v-slot:content>
        <ul v-for="(details, index) of info" :key="index">
          <li>Дата: {{ details.date }}</li>
          <li>Сумма платежа: {{ details.amount }}</li>
          <li>Статус платежа: {{ details.status }}</li>
        </ul>
    </template>
  </modal>
</template>

<script>
import Modal from './Modal.vue';
export default {
  props: {
    title: String,
    info: Object,
  },
  components: {
    Modal
  }
};
</script>