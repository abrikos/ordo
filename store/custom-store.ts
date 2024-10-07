import {defineStore} from 'pinia';


interface UserPayloadInterface {
    email: string;
    password: string;
}

export const useCustomStore = defineStore('auth', {
    state: (): { loading: boolean, loggedUser: UserPayloadInterface | null } => ({
        loggedUser: null,
        loading: false,
    }),
    actions: {
        setLoading() {
            this.loading = true
        },
        unsetLoading() {
            this.loading = false
        },
        async getUser(): Promise<UserPayloadInterface | null> {
            if (!this.loggedUser) {
                const data = await useNuxtApp().$GET('/user/checkAuth')
                if (!data) {
                }
                this.loggedUser = data as UserPayloadInterface
            }
            return this.loggedUser
        },
        async authenticateUser(body: UserPayloadInterface) {
            const config = useRuntimeConfig()
            const data: any = await useNuxtApp().$POST(`/user/login`, body)
            if (!data) return
            this.loggedUser = await this.getUser()
            navigateTo('/user')
        },
        async signupUser(body: UserPayloadInterface) {
            const config = useRuntimeConfig()
            const data: any = await useNuxtApp().$PUT(`/user/signup`, body)
            if (!data) return
            this.loggedUser = await this.getUser()
            console.log('ffffff', this.loggedUser)
            navigateTo('/user')
        },
        async logUserOut() {
            const config = useRuntimeConfig()
            console.warn('Log out')
            //localStorage.setItem(config.public.authTokenName, '')
            //localStorage.setItem(config.public.authTokenName + 'expire', '')
            this.loggedUser = null
        },
    },
});
