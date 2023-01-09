<template>
  <div class="container">
    <form class="card" @submit.prevent="submit">
      <h1>Auth</h1>
      <div style="text-align: left"><pre>{{ form }}</pre></div>

      <div class="form-control" :class="{ invalid: !form.email.valid && form.email.touched }">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email.value" @blur="form.email.blur">
        <small v-if="form.email.touched && form.email.errors.required">Please enter email</small>
      </div>
      <div class="form-control" :class="{ invalid: !form.password.valid && form.password.touched }">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="form.password.value" @blur="form.password.blur">
        <small v-if="form.password.touched && form.password.errors.required">Please enter password</small>
        <small v-else-if="form.password.touched && form.password.errors.minLength">Password min length - 8 symbols</small>
      </div>
      <button class="btn primary" type="submit">Submit</button>
    </form>
  </div>

</template>

<script>
import {useForm} from "@/use/form";

const required = val => !!val;

const minLength = num => val => val.length >= num;

export default {
  setup() {
    const form = useForm({
      email: {
        value: '',
        validators: {
          required,
        }
      },
      password: {
        value: '',
        validators: {
          required,
          minLength: minLength(8),
        }
      }
    });

    console.log(form.password)

    function submit() {

    }

    return { form, submit }
  }
}
</script>

<style>

.card {
  text-align: left;
}
</style>
