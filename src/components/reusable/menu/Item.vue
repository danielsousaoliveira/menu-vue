<script setup lang="ts">
import { ref, computed } from "vue";
import MenuIcon from "./Icon.vue";
import { useStore } from "@/stores/store";
import { useRouter } from "vue-router";

const router = useRouter();

const store = useStore();
interface MenuItem {
  name?: string;
  icon?: { class: string };
  children?: MenuItem[];
  link?: string;
}

const props = defineProps<{
  item: MenuItem;
}>();

const heightContainer = computed(() => (showChildren.value ? "500px" : "0px"));

const showChildren = ref(false);
const active = ref(false);

const toggleMenu = () => {
  active.value = !active.value;
  showChildren.value = !showChildren.value;
  if (props.item?.link) {
    router.push(props.item.link);
  }
  if (!props.item.children) return;
};

const labelName = computed(() =>
  !store.hiddenLeftMenu ? props.item?.name : ""
);
</script>

<template>
  <div
    class="menu-item-base"
    :style="{
      float: store.hiddenLeftMenu ? 'left' : 'right',
    }"
  >
    <div
      class="item-container"
      :class="{
        'active-class': active,
      }"
      @click="toggleMenu"
    >
      <div
        class="item-label"
        :class="{
          'margin-auto': store.hiddenLeftMenu,
        }"
      >
        <MenuIcon :icon="props.item?.icon" />

        <template v-if="labelName">
          <span>{{ labelName }}</span>
        </template>
      </div>

      <template v-if="!store.hiddenLeftMenu">
        <div
          v-if="props.item.children"
          class="item-icons"
          :class="{ opened: showChildren }"
        ></div>
      </template>
    </div>
    <div v-if="!store.hiddenLeftMenu">
      <div
        v-if="props.item.children"
        class="children-container"
        :style="{ maxHeight: heightContainer }"
      >
        <template v-for="child in props.item.children">
          <Item :item="child"></Item>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.active-class {
  background: rgb(242, 242, 242);
  color: #4caf50;
}

.margin-auto {
  margin: auto;
}

.item-icons {
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="rgb(28, 30, 33)" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>')
    50%/2rem 2rem;
  -webkit-filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="rgb(28, 30, 33)" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>');
  filter: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="rgb(28, 30, 33)" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>');
  content: "";
  height: 1.25rem;
  min-width: 1.25rem;
  width: 1.25rem;
  margin-left: 7px;
  margin-right: 7px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  transition: all 0.8s;
}

.item-icons.opened {
  padding: auto;
  -webkit-transform: rotate(180deg) !important;
  transform: rotate(180deg) !important;
  transition: all 0.8s;
}

.item-label {
  span {
    padding-left: 6px;
    padding-right: 6px;
  }
  display: flex;
  margin-left: 7px;
  margin-right: 7px;
  align-items: center;
}

.item-container {
  height: 35px;
  border-radius: 4px;
  width: 100%;
  transform-style: preserve-3d;
  flex-direction: row;
  justify-content: space-between;
  white-space: nowrap;
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  box-sizing: border-box;
  z-index: 800;
  padding: 6px 8px;
  font-size: 16px;
}

.menu-item-base {
  position: relative;
  margin-top: 1.5px;
  margin-bottom: 1.5px;
  border-radius: 4px;
  width: 95%;
  align-self: center;
}

.children-container {
  height: fit-content;
  overflow: hidden;
  transition: all 0.8s ease-in-out;
}
</style>
