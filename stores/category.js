import {defineStore} from "pinia";
import {api} from "~/api/index.js";

export  const useCategoryStore = defineStore('category',()=>{
    const categories = ref([]);

    const featchCategories = async () => {
        const res = await api.get('/categories');
        categories.value = res.data.categories
    }
    featchCategories();
    return{
        categories,
    }
})