import {defineStore} from "pinia";
import {api} from "~/api/index.js";

export const useGenderStore = defineStore(('gender'), () => {
    const genders = ref([]);
    const fethGenders = async () => {
        const res = await api.get('/genders');
        genders.value = res.data.genders;
    }
    fethGenders();

    return{
        genders
    }
})