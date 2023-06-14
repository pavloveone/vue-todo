<template>
    <modal :title="title">
        <template v-slot:content>
            <ul>
                <li v-for="(task, index) in tasks" :key="index">
                    <input type="checkbox" v-model="task[index]"> {{ task }}
                </li>
            </ul>
        </template>
    </modal>
</template>

<script>
import Modal from './Modal.vue';
export default {
  props: {
    title: String,
    tasks: Array,
  },
  components: {
      Modal
  }
};
</script>