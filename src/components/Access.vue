<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../boot/firebase.js";
import { Notify } from "quasar";

/**
 * access control
 */
const access = ref(true);

/**
 * User Informatio
 */
const objectForm = ref({
  email: "",
  password: "",
  isPwd: true,
});

/**
 * Reset all inputs
 */
const onReset = () => {
  objectForm.value.email = null;
  objectForm.value.password = null;
};

/**
 * Send data to firebase
 */
const sendData = async () => {
  if (!access.value) {
    createUserWithEmailAndPassword(
      auth,
      objectForm.value.email,
      objectForm.value.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Notify.create({
          message: "Usuario Registrado",
          color: "green",
          textColor: "white",
          position: "bottom",
          timeout: 3000,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
          Notify.create({
          message: "Error en el Registro ",
          color: "red",
          textColor: "white",
          position: "bottom",
          timeout: 3000,
        });
        // ..
      });
  } else if (access.value) {
  }
};
</script>

<template>
  <div class="q-px-xl">
    <div class="text-h5">Formulario de {{ access ? "Login" : "Registro" }}</div>
    <q-form @submit="sendData" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="objectForm.email"
        label="Your email *"
        hint="Enter your email address"
        lazy-rules
        :rules="[(val) => !!val || 'Direccion de correo electronico requerido']"
      />
      <q-input
        v-model="objectForm.password"
        filled
        :type="objectForm.isPwd ? 'password' : 'text'"
        hint="Ingresa una contraseña"
      >
        <template v-slot:append>
          <q-icon
            :name="objectForm.isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="objectForm.isPwd = !objectForm.isPwd"
          />
        </template>
      </q-input>

      <div class="row block q-gutter-md">
        <div class="row justify-center q-gutter-x-md">
          <q-btn
            style="width: 150px"
            label="Reset"
            type="reset"
            color="primary"
          />
          <q-btn
            style="width: 150px"
            :label="access ? 'Login' : 'Registro'"
            type="submit"
            color="primary"
          />
        </div>
        <div class="row justify-center">
          <q-btn
            v-if="access"
            style="width: 150px"
            flat
            label="Ir a Registro"
            color="primary"
            @click="access = false"
          />
          <q-btn
            v-else
            style="width: 150px"
            flat
            label="Ir a Login"
            color="primary"
            @click="access = true"
          />
        </div>
      </div>
    </q-form>
  </div>
</template>
