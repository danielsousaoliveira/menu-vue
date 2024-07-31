<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import Menu from "@/components/reusable/menu/Menu.vue";
import PopoverMenu from "@/components/reusable/PopoverMenu.vue";
import OverlaySettings from "@/components/reusable/OverlaySettings.vue";
import Logo from "@/assets/img/Logo.vue";
import { useStore } from "@/stores/store";

const screenWidth = ref(window.innerWidth);
const store = useStore();

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScreenWidth);
});

onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});
</script>

<template>
  <v-app>
    <v-app-bar :elevation="3">
      <a href="/">
        <div class="navbar-logo">
          <Logo></Logo>
        </div>
      </a>

      <v-spacer></v-spacer>
      <OverlaySettings></OverlaySettings>
      <PopoverMenu></PopoverMenu>
    </v-app-bar>

    <v-main
      :style="{
        paddingLeft: store.menuWidth,
      }"
    >
      <Menu></Menu>
      <p class="main-text">Page 1</p>
    </v-main>
  </v-app>
</template>
