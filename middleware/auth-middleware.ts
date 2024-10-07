import {useCustomStore} from '~/store/custom-store';
import {storeToRefs} from "pinia"; // import the auth store we just created
const pages = ['/login', '/signup'];
export default defineNuxtRouteMiddleware(async (to, from) => {
    const {getUser} = useCustomStore();
    const loggedUser =await getUser()
    if(!loggedUser && !pages.includes(to.path)) {
        return navigateTo('/login')
    }

});
