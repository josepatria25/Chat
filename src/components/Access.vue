<script setup>
import useQuasar from "quasar/src/composables/use-quasar.js";
import { ref } from "vue";

/**
 * access control
*/
const access = ref(true)

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
const sendData = () => {

};

</script>

<template>
  <div class="q-px-xl">
    <div class="text-h5">Formulario de {{ access ? 'Login' : 'Registro'}} </div>
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
        hint="Password with toggle"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="objectForm.isPwd = !objectForm.isPwd"
          />
        </template>
      </q-input>

      <div class="row justify-center q-gutter-md">
        <q-btn style="width: 150px" label="Reset" type="reset" color="primary" />
        <q-btn style="width: 150px" label="Login/Registro" type="submit" color="primary" />
        <q-btn style="width: 150px" label="Ir a Registro" color="green" />
        <q-btn style="width: 150px" label="Ir a Login" color="green" />

      </div>
    </q-form>
  </div>
</template>
