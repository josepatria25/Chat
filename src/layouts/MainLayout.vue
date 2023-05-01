<script setup>
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../boot/firebase.js";
import AddText from "components/AddText.vue";
import { useAuth } from '@vueuse/firebase/useAuth'
const { isAuthenticated, user } = useAuth(auth)


/**
 * Log Out
*/
const logout = () => {

  signOut(auth)
    .then(() => {
    })
    .catch((error) => {
      console.log(error);
    });
};

/**
 * Actual User
*/
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  }
});


</script>
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-space />
        <q-btn v-if="isAuthenticated" flat color="white" label="Log Out" @click="logout"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <AddText/>
  </q-layout>
</template>
