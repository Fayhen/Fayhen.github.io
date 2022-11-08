<template>
  <q-page class="column items-center justify-evenly">
    <transition-group
      appear
      tag="div"
      class="q-page-inner-wrapper"
      enter-active-class="animated fadeInUp"
    >
      <p key="text-home-hello" class="text-h4" style="animation-delay: 0.1s">
        {{ $t('main.hello') }}
      </p>
      <q-img
        class="profile-pic"
        src="images/profile-pic.jpg"
        :ratio="1"
        key="profile-picture"
        style="animation-delay: 0.2s"
      />
      <div key="text-home-intro" style="animation-delay: 0.3s">
        <p class="text-h4">{{ $t('main.myName') }}</p>
        <p class="text-h5">{{ $t('main.myJob') }}</p>
      </div>
    </transition-group>
  </q-page>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.profile-pic
  height: 250px
  width: 250px
  border-radius: 100%
  margin-top: 1em
  margin-bottom: 1.5em

  &:hover
    cursor: pointer
</style>
