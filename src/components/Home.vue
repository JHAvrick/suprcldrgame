<template>
    <div ref="iframeWrapper">
        <iframe class="s-promotional-video" ref="iframe" width="560" height="315" src="https://www.youtube.com/embed/KmdWbfCdBVs?modestbranding=1&rel=0&rel=0&showinfo=0" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMotion } from '@vueuse/motion'

const iframeWrapper = ref<HTMLElement>()
useMotion(iframeWrapper, {
    initial: {
        opacity: 0,
        y: 500,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1000, // 1 second (in milliseconds)
        }
    }
})

</script>

<style scoped>
.s-promotional-video {
    border-radius: 12px;
    border: 1px solid #444;
    max-width: 100%;
    /* width: 70vw;
    height: 39.375vw; */
}
</style>
