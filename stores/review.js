import {api} from "~/api/index.js";
import {defineStore} from "pinia";

export const  useReviewStore = defineStore('review', () => {
    const reviews = ref([]);
    const authStore = useAuthStore();
    const fetchReviewsByFilmId = async (id) => {
        const res = await api.get(`/films/${id}/reviews`);
        reviews.value = res.data.reviews;
    }
    const addReview = async (review) => {
        await api.post(`/users/${authStore.authData.id}/reviews`, review, {
        headers: {
            Authorization: `Bearer ${authStore.authData.token}`,
        }
    });
    await fetchReviewsByFilmId(review.film_id)
}

return{
    reviews,
    fetchReviewsByFilmId,
    addReview,
}
});