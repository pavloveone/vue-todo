<template>
  <div class="modal">
    <div class="modal-content">
        <h2 class="modal-content__title">{{ title }}</h2>
        <slot name="content"></slot>
        <button class="btn_close" @click="$emit('close')">X</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: rgb(78, 75, 75);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.modal-content__title {
  padding-bottom: 15px;
}

.btn_close {
  position: absolute;
  top: 5px;
  right: 10px;
  border: none;
  background-color: rgb(78, 75, 75);
  cursor: pointer;
}
</style>

<script>
export default {
  props: {
    title: String,
  },
};
</script>