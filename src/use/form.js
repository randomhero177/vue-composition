import { computed, reactive } from 'vue';
import { useField } from "@/use/field";

export function useForm(init = {}) {
    const form = reactive({});
    for (const [key, value] of Object.entries(init)) {
        form[key] = useField(value);
    }

    form.valid = computed(() => {
        const keys = Object.keys(form).filter(el => el !== 'valid');
        const arr = keys.reduce((prev, cur) => {
            prev = !prev ? prev : form[cur].valid;
            return prev;
        }, true)
        return arr
    })

    return form;
}