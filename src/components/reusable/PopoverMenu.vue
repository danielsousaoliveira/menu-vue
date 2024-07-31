<script setup lang="ts">
import { ref } from "vue";
const menu = ref(false);
const items = ref([
  { text: "Account", icon: "mdi-account" },
  { text: "Settings", icon: "mdi-cog" },
]);
</script>

<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" icon="mdi-account"> </v-btn>
    </template>

    <v-card min-width="300">
      <v-list>
        <v-list-item prepend-icon="mdi-account-circle" title="Daniel Oliveira">
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact">
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green" variant="text" @click="menu = false">
          Logout
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
