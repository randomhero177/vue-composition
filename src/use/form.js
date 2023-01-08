import { ref, reactive } from 'vue';

export function useForm(init = {}) {
    const form = reactive({

    })

    for (const [key, value] of Object.keys(init)) {
        console.log(key);
        console.log(value);
    }

    return form;
}