<script setup>
import { ref } from "vue";

const text = ref("text");
</script>

<template>
  <q-footer elevate>
    <q-toolbar class="bg-white text-white ">
      <q-input
        v-model="text"
        label="Ingrese Texto"
        dark
        bg-color="primary"
        rounded outlined
        class="q-pa-sm full-width cursor-pointer"
      >
      <template  v-slot:append>
        <q-btn flat color="white" icon="send" />
      </template>
      </q-input>
    </q-toolbar>
  </q-footer>
</template>
