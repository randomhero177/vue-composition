import { ref } from 'vue';
import {useFetch} from "@/use/fetch";

export async function useUsers() {
    const loaded = ref(false);
    const { response: users, request } = await useFetch('https://jsonplaceholder.typicode.com/users');

    if (!loaded.value) {
        await request();
        loaded.value = true;
    }

    return { users };
}