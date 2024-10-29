<script setup lang="ts">
import {storeToRefs} from 'pinia'; // import storeToRefs helper hook from pinia
import {useCustomStore} from '~/store/custom-store';

const config = useRuntimeConfig()
const route = useRoute()
const {logUserOut} = useCustomStore(); // use authenticateUser action from  auth store
const {loggedUser, loading} = storeToRefs(useCustomStore())
const leftDrawerOpen = ref(true);
const pages = [
  //{to: '/', label: 'Сводная информация', icon: 'dashboard'},
  //{to: '/network-maps', label: 'Карты сети', icon: 'map'},
  {to: '/network', label: 'Сеть', icon: 'language'},
  //{to: '/templates', label: 'Шаблоны', icon: 'build'},
  //{to: '/auto-provisioning', label: 'Инициализация устройств', icon: 'brightness_auto'},
  //{to: '/tasks', label: 'Задачи', icon: 'assignment'},
  //{to: '/events', label: 'События', icon: 'event_note'},
  //{to: '/notifications', label: 'Уведомления', icon: 'notifications'},
  {to: '/traps', label: 'Трапы', icon: 'catching_pokemon'},
  {to: '/settings', label: 'Настройки', icon: 'settings'},
  {to: '/problems', label: 'Проблемы', icon: 'warning'},
  {to: '/audit', label: 'Аудит', icon: 'checklist'},
  {to: '/action', label: 'Действия', icon: 'commit'},
  {to: '/firmwares', label: 'ПО', icon: 'store'},
]
</script>

<template lang="pug">
q-layout(view="hHh Lpr lff")
  NuxtLoadingIndicator
  q-header(elevated)
    q-toolbar
      q-img(src="/logo.svg" style="height: 30px;max-width: 30px")
      //q-btn(v-if="loggedUser" flat round dense icon="menu" @click="toggleDrawer")
      q-toolbar-title
        q-btn(flat to="/") Abrikos HP
      q-btn-dropdown(flat label="Admin" v-if="loggedUser?.isAdmin")
        q-list
          q-item
            q-btn(to="/admin/users" label="Пользователи")
          q-item
            q-btn(to="/admin/import" label="Импорт")
      q-btn.flex.la-align-center(flat dense no-caps v-if="loggedUser" to="/user") {{loggedUser.email}}
      q-btn(v-if="loggedUser" @click="logUserOut" icon="logout" )
      q-btn(v-if="!loggedUser" to="/login" icon="login" )
  q-drawer(v-model="leftDrawerOpen" bordered :mini="mini")

    q-list
      q-item(v-for="page in pages" :to="page.to" active-class="active" :active="route.fullPath===page.to || route.path===page.to")
        q-item-section(avatar)
          q-icon(:name="page.icon")
        q-item-section {{page.label}}
    div#progress
      q-linear-progress(color="blue" indeterminate v-if="loading" )
      //ThemeSwitch
  q-page-container
    slot

</template>

<style scoped>

</style>
