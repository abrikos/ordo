<script setup lang="ts">
import {useCustomStore} from '~/store/custom-store';

const {signupUser} = useCustomStore()
const config = useRuntimeConfig()
const user = ref(config.public.devMode ? {email: Math.random()+'@a12.com', password: '12345678', password2:'12345678'} : {email: '', password: '', password2: ''})

const res = ref(true)
async function submit() {
  user.value.email = Math.random()+'@a12.com'
  res.value = !!await signupUser(user.value)
}

function reset() {
  res.value = true
  user.value = {email: '', password: '', password2:''}
}


</script>

<template lang="pug">
q-card.q-pa-lg.fixed-center
  q-toolbar
    q-toolbar-title Регистрация
  q-form(@submit="submit" @reset="reset")
    q-input(v-model="user.email" label="Логин")
    q-input(v-model="user.password" label="Пароль" type="password" )
    q-input(v-model="user.password2" label="Подтверждение пароля" type="password" )
    q-card-actions
      q-btn(type="submit" label="Отправить" color="primary" )
      q-btn(type="reset" label="Сбросить")
      q-btn(to="/login" label="Войти")

</template>

<style scoped>

</style>
