<script setup>
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../boot/firebase.js";

/**
 * Log Out
*/
const logout = () => {
  signOut(auth)
    .then(() => {
      console.log('asdasd');
    })
    .catch((error) => {
      console.log('qweqwe');
    });
};

/**
 * Actual User
*/
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  }
});
</script>
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-space />
        <q-btn flat color="white" label="Log Out" @click="logout"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-indigo-10 text-white">
      <q-toolbar> </q-toolbar>
    </q-footer>
  </q-layout>
</template>
