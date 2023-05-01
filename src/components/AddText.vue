<script setup>
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../boot/firebase"


const text = ref("");

/**
 * Add Text Event
*/
const addText = () => {
    addDoc(collection(db, "chats"), {
        text: text.value,
        id: auth.currentUser.uid,
        time: Date.now(),
        email: auth.currentUser.email
    })
    text.value = "";
}

</script>

<template>
  <q-footer elevate>
    <q-toolbar class="bg-white text-white ">
      <q-input
        v-model="text"
        label="Ingrese Texto:"
        label-color="white"
        dark
        bg-color="blue-10"
        rounded outlined
        class="q-pa-sm full-width cursor-pointer"
        @keyup.enter="addText"
      >
      <template  v-slot:append>
        <q-btn flat color="white" icon="send"   @click="addText"/>
      </template>
      </q-input>
    </q-toolbar>
  </q-footer>
</template>
