import {useCustomStore} from '~/store/custom-store';
import {storeToRefs} from "pinia"; // import the auth store we just created
const pages = ['login', 'signup', 'password-restore', 'password-restore-code'];
export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log(to)
    const {getUser} = useCustomStore();
    const loggedUser =await getUser()
    if(!loggedUser && !pages.includes(to.name as string)) {
        return navigateTo('/login')
    }

});
