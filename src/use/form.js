import { reactive } from 'vue';
import { useField } from "@/use/field";

export function useForm(init = {}) {
    const form = reactive({});
    for (const [key, value] of Object.entries(init)) {
        console.log(key);
        console.log(value);

        form[key] = useField(value);
    }

    return form;
}