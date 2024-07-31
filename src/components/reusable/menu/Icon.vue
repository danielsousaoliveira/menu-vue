<script setup lang="ts">
const props = defineProps({
  icon: {
    type: Object,
    default: () => ({ class: "" }),
  },
});
</script>

<template>
  <i class="item-icon" :class="props.icon.class"></i>
</template>

<style scoped lang="scss">
.item-icon {
  font-size: 20px;
  width: 20px;
  overflow: hidden;
  transition: color 0.3s ease;
  color: rgb(28, 30, 33);
}
</style>
