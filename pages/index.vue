<script setup lang="ts">

</script>

<template lang="pug">
q-page
  div
    q-parallax(src="/image/band.jpg")
      //template(v-slot:media)
        video(autoplay loop muted)
          source(type="video/mp4" src="https://embed.wave.video/dB837coTfoxhZSSJ")
      br
      br
      br
      br
      br
      br
      h1 ОRDO
    div.text1.q-pa-sm.text-center
      span этно-фьюжн группа и сообщество единомышленников, в творчестве которой находят отражение музыкальная культура народов Арктики.
  div.text
    br
    br

    br
    audio(controls)
      source(type="audio/mpeg" src="/music/te-te.mp3")
    audio(controls)
      source(type="audio/mpeg" src="/music/mevan-dodun.mp3")
    br
    br
    br
    br
    p
      span Творчество группы Ордо рождается во взаимодействии с носителями культуры народов республики.
    p
      span Группа создана на базе Дома музыкантов.

    p
      span Участники группы:
    ul
      li Кирилл Третьяков
      li Марк Яковлев
      li Анатолий Чиряев
      li Артем Филиппов-Abrikos
      li Александр Лукин
      li Николай Михеев
      li Надежда Варламова-Nadikan
      li Евгений Бычков

</template>

<style scoped lang="sass">
h1
  color: white
  text-shadow: 1px 1px 2px red, 0 0 1em green, 0 0 0.2em green

.text1
  font-size: 1.4em
  color: white
  text-shadow: 1px 1px black
.text
  font-size: 1.4em
  color: navajowhite
  //text-shadow: 1px 1px silver

</style>
