<script setup>
import { AppState } from '@/AppState';
import { Artwork } from '@/models/Art';
import { artworksService } from '@/services/ArtWorksService';
import { logger } from '@/utils/Logger';
import { Pop } from '@/utils/Pop';
import { computed, onMounted, onUnmounted } from 'vue';



const ArtWorks = computed(() => AppState.ArtWorks)

onMounted(() => {
  logger.log('Home page is mounted!')
  getArtWork()
})

onUnmounted(() => {
  logger.log('Home page is no longer mounted!')
})


async function getArtWork() {
  try {
    await artworksService.getArtwork()
  }
  catch (error) {
    Pop.error(error, 'could not get artwork')
    logger.error('could not get artwork!', error)
  }

}


</script>

<template>
  <div>
    <section class="container">
      <div class="row">
        <div class="col">
          <h1>ArtWork</h1>
        </div>
      </div>
    </section>
  </div>

  <section class="container">
    <div class="row">
      <div class="col-12">
        <div v-for="artworks in artworks" :key="artworks.id">
          🖼️{{ artworks }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
