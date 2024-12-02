import {defineStore} from "pinia";
import {api} from "~/api/index.js";

export const useFilmStore = defineStore('film', () => {
    const films = ref([]);
    const isLoading = ref(false);

    const fetchFilms = async () => {
        isLoading.value = true;
        const res = await api.get('/films');
        films.value = res.data.films;
        isLoading.value = false;
    }

    fetchFilms();
    return {
        films,
        isLoading,
    }
});