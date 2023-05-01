<script setup>
import useQuasar from "quasar/src/composables/use-quasar.js";
import { ref } from "vue";

/**
 * access control
 */
const access = ref(true);

/**
 * User Informatio
 */
const objectForm = ref({
  email: ref(""),
  password: ref(""),
  isPwd: ref(true),
});

/**
 * Send data to firebase
 */
const sendData = () => {};
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
            :name="isPwd ? 'visibility_off' : 'visibility'"
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
            label="Eviar"
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
