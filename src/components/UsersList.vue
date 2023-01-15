<template>
    <div class="card">
      {{ users }}
      <ul class="list">
        <li class="list-item" v-for="user in users.users" :key="user.id">{{ user.name }} sd</li>
      </ul>
    </div>
</template>

<script>
import {useUsers} from "@/use/users";
export default {
    async setup() {
      const users = await useUsers();
      console.log(users);
      return { users };
    }
}
</script>

