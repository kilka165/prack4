import {defineStore} from "pinia";
import {api} from "~/api/index.js";

export const useAuthStore = defineStore("auth", () => {
    const authData = ref(null);
    const authCookie = useCookie("auth");

    const signup = async (data) => {
        try {
            console.log("Отправляемые данные:", data);
            const res = await api.post("/auth/signup", data);
            authData.value = res.data;
            saveAuthData();
        } catch (e) {
            throw new Error(e.response.data).message;
        }
    };

    const signin = async (data) => {
        try {
const res = await api.post("/auth/signin", data);
authData.value = res.data;
saveAuthData();
        }catch (e) {
            throw new Error(e.response.data).message;
        }
    }
    const signout = async () => {
        await api.post("/auth/signout", null, {
            headers: {
                Authorization: `Bearer ${authData.value.token}`
            }
        });
        removeAuthData()
    }


    const saveAuthData = () => {
        if (authData.value) {
            authCookie.value = btoa(JSON.stringify(authData.value));
        }
    };

    const removeAuthData = () => {
        authData.value = null;
        authCookie.value = null;
    }

    const readAuthData = () => {
        if (authCookie.value) {
            authData.value = JSON.parse(atob(authCookie.value));
        }
    };
    readAuthData();


    return {
        authData,
        signup,
        signin,
        signout,
    }

});