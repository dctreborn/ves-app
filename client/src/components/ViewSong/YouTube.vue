<template>
  <panel title="YouTube Video">
      <youtube
        :video-id="youtubeId"
        :player-width="'100%'"
        :player-height="330"
        class="video"
      >

      </youtube>
  </panel>
</template>

<script>
import VueYouTubeEmbed from 'vue-youtube-embed'
export default {
  props: [
      'youtubeId'
  ],
    components: {
        VueYouTubeEmbed
    }
}
</script>

<style scoped>

</style>
