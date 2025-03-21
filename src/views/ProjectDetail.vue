<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['project']);
const emit = defineEmits(['close']);

const handleClickOutside = (event) => {
  if (event.target.classList.contains('modal-overlay')) {
    emit('close');
  }
};
</script>

<template>
  <div class="modal-overlay" @click="handleClickOutside">
    <div class="modal-content" @click.stop>
      <h1 class="modal-title">{{ props.project.title }}</h1>
      <img :src="props.project.image" :alt="props.project.title" class="modal-image" />
      <p class="modal-description">{{ props.project.description }}</p>
    </div>
  </div>
</template>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #161b22;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  color: white;
  width: 50%;
  max-width: 600px;
}

.modal-title {
  font-size: 24px;
  font-weight: bold;
}

.modal-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 20px 0;
}

.modal-description {
  font-size: 16px;
  line-height: 1.5;
}
</style>
