<!-- <template>
  <div>
    <NuxtWelcome />
  </div>
</template> -->
<script setup lang="ts">
const colorMode = useColorMode()
const themes = [
  'system',
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
]
</script>

<template>
  <div>
    <button class="btn">
      Hello daisyUI
    </button>
    <Icon name="material-symbols:19mp-outline-rounded" />
    <select v-model="colorMode.preference" class="select w-full max-w-xs">
      <option disabled selected>
        Theme
      </option>
      <option v-for="theme of themes" :key="theme">
        {{ theme }}
      </option>
    </select>
  </div>
</template>
