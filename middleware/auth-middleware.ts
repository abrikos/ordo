import {useCustomStore} from '~/store/custom-store';
import {storeToRefs} from "pinia"; // import the auth store we just created
const pages = ['/login', '/signup', '/'];
export default defineNuxtRouteMiddleware(async (to, from) => {
    const {getUser, loggedUser} = useCustomStore();
    const loggedUser2 = await getUser()
    if(!loggedUser && !pages.includes(to.path)) {
        return navigateTo('/login')
    }

});
