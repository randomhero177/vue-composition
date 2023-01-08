<template>
  <div class="container">
    <form class="card" @submit.prevent="submit">
      <h1>Auth</h1>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email">
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password">
      </div>
      <button class="btn primary" type="submit">Submit</button>
    </form>
  </div>

</template>

<script>
import {useForm} from "@/use/form";

const required = val => !!val;

const minLength = num => val => val.length >= num

export default {
  setup() {
    const form = useForm({
      email: {
        value: 'email.@email.com',
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

    function submit() {

    }

    return { form, submit }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
