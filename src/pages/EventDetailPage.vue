<template>
    <div style="padding-top: 64px;">
        <SectionTopBanner />
        <div class="container my-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="fs-4">{{ event.date }}</div>
                <div class="fs-4">{{ event.location }}</div>
            </div>
            <div class="ratio ratio-16x9">
                <iframe :src="formattedVideoUrl(event.videoUrl)" title="Workshop Video" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div class="mt-5">
                <p class="text-start">{{ event.description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue'
export default {
    name: "EventDetailPage",
    components: {
        SectionTopBanner,
    },
    computed: {
        event() {
            let eventId = this.$route.params.eventId;
            return this.$store.getters.getEvent(eventId);
        },
    },
    methods: {
        formattedVideoUrl(url) {
            // Convert YouTube URL to embed format if it contains "watch?v="
            return url.includes("watch?v=") ? url.replace("watch?v=", "embed/") : url;
        }
    }
}
</script>
<style lang="">

</style>