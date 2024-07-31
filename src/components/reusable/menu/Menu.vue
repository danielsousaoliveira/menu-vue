<script setup lang="ts">
import { computed } from "vue";
import ItemComponent from "./Item.vue";
import DividerComponent from "./Divider.vue";
import ButtonComponent from "./Button.vue";
import { defineProps } from "vue";
import { useStore } from "@/stores/store";

const store = useStore();

const props = defineProps({
  animationDuration: {
    type: Number,
    default: 300,
  },
});

const toggleSidebar = () => {
  store.hiddenLeftMenu = !store.hiddenLeftMenu;
};

const themeClass = computed(() => {
  const theme = store.darkMode ? "dark" : "white";
  return [`${theme}-theme`];
});

const computedMenuList = computed(() => {
  return store.mockMenu;
});
</script>

<template>
  <nav
    class="main-menu ltr"
    :class="themeClass"
    :style="{
      width: store.menuWidth,
    }"
  >
    <div
      class="main-menu-box"
      :style="{
        width: store.menuWidth,
      }"
    >
      <template v-for="(item, index) in computedMenuList" :key="index">
        <ItemComponent v-if="!item?.divider" :item="item"></ItemComponent>
        <DividerComponent v-else-if="item?.divider" :data="item" />
      </template>
    </div>
    <ButtonComponent
      @click="toggleSidebar"
      :hiddenMenu="store.hiddenLeftMenu"
    ></ButtonComponent>
  </nav>
</template>

<style lang="scss">
.main-menu {
  height: 100vh;
  overflow-x: hidden;
  transition: all 0.5s;
  display: flex;
  flex-flow: column;
  border-right: 1px solid #cfcfcf;
  position: fixed;
  left: 0px;
  top: 0px;
}

.main-menu-box {
  flex: 1 1 auto;
  position: relative;
  display: flex;
  flex-flow: column;
  left: 0px;
  overflow-y: overlay;
  overflow-x: hidden;
  margin-top: 80px;
}
</style>
