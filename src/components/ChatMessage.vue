<script setup>
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { ref } from "vue";
import { db, auth } from "../boot/firebase";

/**
 * Observe data in real time
 */
let messages = ref([]);

const getMessages = () => {
messages.value = [];
const q = query(collection(db, "chats"), orderBy("time"));
const unsubscribe = onSnapshot(q, (snapshot) => {
  console.log(q);
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      messages.value.push({
        id: change.doc.id,
        ...change.doc.data(),
      });

    }
    if (change.type === "modified") {
    }
    if (change.type === "removed") {
    }
  });
});
}
getMessages()

/**
 * Delete a single message
*/
const deleteMessage = (t, e) => {
  console.log(t);
  console.log(e);
}

/**
 * Edit a message
*/
const editMessage = (t, e) => {
  console.log(t);
  console.log(e);
}
</script>

<template>
  <div class="q-pa-md row justify-center">
    <div
      style="width: 100%; max-width: 400px"
    >
    <div  v-for="message in messages"
      :key="message.id">
       <div v-if="message.id == auth.currentUser.uid" class="row justify-end q-gutter-x-md">
        <q-icon name="delete" color="red" class="cursor-pointer" @click="deleteMessage(message.email, message.time)" />
        <q-icon name="edit" color="green" class="cursor-pointer" @click="editMessage(message.email, message.time)" />
      </div>
      <q-chat-message
        :text="[message.text]"
        :sent="message.id == auth.currentUser.uid"
        :name="message.email"
      >
      
      </q-chat-message>
     
      </div>
    </div>
  </div>
</template>
