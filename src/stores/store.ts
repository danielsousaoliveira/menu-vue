import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const darkMode = ref(false);
  const currentLanguage = ref("en");
  const hiddenLeftMenu = ref(false);

  const menuWidth = computed(() => {
    if (hiddenLeftMenu.value) {
      return "65px";
    }
    return "290px";
  });

  const mockMenu = ref([
    {
      name: "Users",
      icon: { class: "mdi mdi-account-group" },
      children: [
        {
          name: "Daniel Oliveira",
          icon: { class: "mdi mdi-account" },
        },
      ],
    },
    {
      divider: true,
    },
    {
      name: "Cities",
      icon: { class: "mdi mdi-city" },
      children: [
        {
          name: "Porto",
          link: "/page1",
          icon: { class: "mdi mdi-airballoon" },
        },
        {
          name: "Lisbon",
          icon: { class: "mdi mdi-bridge" },
          children: [
            {
              name: "Cascais",
              icon: { class: "mdi mdi-weather-sunset" },
            },
          ],
        },
        {
          name: "Faro",
          icon: { class: "mdi mdi-weather-sunny" },
          children: [
            {
              name: "Albufeira",
              icon: { class: "mdi mdi-glass-cocktail" },
            },
            {
              name: "Olhão",
              icon: { class: "mdi mdi-beach" },
            },
          ],
        },
      ],
    },
  ]);

  return { darkMode, currentLanguage, hiddenLeftMenu, mockMenu, menuWidth };
});
