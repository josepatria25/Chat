<script setup>
import Access from "components/Access.vue";
import ChatMessage from "components/ChatMessage.vue";
import { auth } from "../boot/firebase.js";
import { useAuth } from '@vueuse/firebase/useAuth'
const { isAuthenticated, user } = useAuth(auth)


</script>

<template>
  <q-page padding>
    <Access v-if="!isAuthenticated"/>
    <ChatMessage v-if="isAuthenticated"/>
  </q-page>
</template>


