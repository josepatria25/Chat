<script setup>
import { collection, query, onSnapshot } from "firebase/firestore";
import { ref } from "vue";
import { db, auth } from "../boot/firebase"

/**
 * Observe data in real time 
*/
let messages = ref([])

const q = query(collection(db, "chats"));
const unsubscribe = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
        console.log("New chat: ", change.doc.data());
        messages.value.push({
            id: change.doc.id,
          ...change.doc.data()
        })
    }
    if (change.type === "modified") {
        console.log("Edit chat: ", change.doc.data());
    }
    if (change.type === "removed") {
        console.log("Removed city: ", change.doc.data());
    }
  });
});

</script>

<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        name="Jane"
        :text="['doing fine, how r you?']"
      />
    </div>
  </div>
</template>