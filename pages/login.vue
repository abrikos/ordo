<script setup lang="ts">
import {useCustomStore} from '~/store/custom-store';

const {loggedUser, authenticateUser} = useCustomStore()
const config = useRuntimeConfig()

const user = ref(config.public.devMode ? {email: 'admin@a12.com', password: '12345678'} : {email: '', password: ''})

async function submit() {
  await authenticateUser(user.value)
}
onMounted(()=>{
  if(loggedUser) {navigateTo('/user')}
})

function reset() {
  user.value = {email: '', password: ''}
}


</script>

<template lang="pug">
q-card.q-pa-lg.fixed-center
  q-toolbar
    q-toolbar-title Вход
  q-form(@submit="submit" @reset="reset")
    q-input(v-model="user.email" label="Логин")
    q-input(v-model="user.password" label="Пароль" type="password" )
    q-card-actions
      q-btn(type="submit" label="Отправить" color="primary" )
      q-btn(type="reset" label="Сбросить")
      q-btn(to="/signup" label="Зарегистрироваться")

</template>

<style scoped>

</style>
