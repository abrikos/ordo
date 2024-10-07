<script setup lang="ts">
import {storeToRefs} from 'pinia'; // import storeToRefs helper hook from pinia
import {useCustomStore} from '~/store/custom-store';

const {logUserOut} = useCustomStore(); // use authenticateUser action from  auth store
const {loggedUser, loading} = storeToRefs(useCustomStore())
const leftDrawerOpen = ref(true);

function toggleDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

</script>

<template lang="pug">
q-layout(view="hHh Lpr lff")
  q-header(elevated)
    q-toolbar
      q-btn(v-if="loggedUser" flat round dense icon="menu" @click="toggleDrawer")
      q-toolbar-title
        q-btn(flat to="/") Веб-конфигуратор
      q-btn(to="/admin/users" label="Users" )
      q-btn.flex.la-align-center(flat dense no-caps v-if="loggedUser" to="/user") {{loggedUser.email}}
      q-btn(flat dense no-caps v-if="loggedUser" @click="logUserOut" icon="logout" )

    div#progress
      q-linear-progress(color="blue" indeterminate v-if="loading" )
      //ThemeSwitch
  q-page-container
    slot

</template>

<style scoped>

</style>
