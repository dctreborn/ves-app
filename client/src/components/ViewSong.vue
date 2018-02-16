<template>
  
</template>

<script>
import songsService from '@/services/songsService'
export default {    
    async mounted(){
        const songId = this.$store.state.route.params.songId
        const song = await songsService.show(showId)
    }
}
</script>

<style scoped>

</style>
