<template>
    <panel title="Tab">
        <textarea readonly v-model="song.tab"></textarea>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  props: [
    'song'
  ]
}
</script>

<style scoped>
textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    padding: 40px;
}
</style>
