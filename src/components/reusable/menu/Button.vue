<script setup lang="ts">
const props = defineProps({
  hiddenMenu: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="hide-menu-button">
    <div
      class="hide-menu-icon bottom-icon"
      :class="{ 'spin-icon': !props.hiddenMenu }"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.hide-menu-button {
  flex: 0 1 50px;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  width: 100%;
  display: block;
  z-index: 854;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  :first-child {
    height: 50px !important;
  }
  background-color: rgba(228, 228, 228, 0.753);
}

.bottom-icon {
  width: 20px;
  margin-left: 7px !important;
  transition: transform 0.3s;
  transform: rotate(90deg);
}

.ltr .spin-icon {
  transform: rotate(-90deg);
}
.hide-menu-icon {
  margin-left: 7px;
  margin-right: 7px;
  content: "";
  height: 1.25rem;
  min-width: 1.25rem;
  width: 1.25rem;
  margin-left: auto;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="rgb(28, 30, 33)" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>')
    50%/2rem 2rem;
  -webkit-filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="rgb(28, 30, 33)" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>');
  filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="rgb(28, 30, 33)" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>');
}
</style>
