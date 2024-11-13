<template>
    <div style="padding-top: 64px;">
        <SectionTopBanner />
        <div class="container py-5 mb-5">
            <h1 class="text-center display-6 mb-5">Events</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mb-5">
                <div class="col" v-for="(event, index) in events" :key="index">
                    <router-link :to="'/events/' + event.sid"
                        class="card border p-1 border-2 h-100 text-decoration-none"
                        style="border-color: var(--secondary-color) !important; border-radius: 0 2rem 0 2rem !important;">
                        <div class="ratio ratio-16x9">
                            <iframe :src="formattedVideoUrl(event.videoUrl)" style="border-top-right-radius: 2rem;"
                                title="Workshop Video" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <div class="card-body mt-2 p-2"
                            style="border-bottom-left-radius: 2rem; background-color: var(--third-color);">
                            <div
                                class="d-flex justify-content-between align-items-center border-bottom border-white border-2 pb-1">
                                <button class="btn rounded-pill text-white"
                                    style="background-color: var(--secondary-color)"><i
                                        class="bi bi-calendar-event me-2"></i>{{ event.date }}</button>
                                <button class="btn rounded-pill text-white"
                                    style="background-color: var(--secondary-color)"><i class="bi bi-geo me-2"></i>{{
                                        event.location }}</button>
                            </div>
                            <p class="text-start mb-2 pt-1">{{ event.title }}</p>
                            <p class="text-start text-ellipsis3">{{ event.description }}</p>
                            <div v-if="event.upcoming" class="btn text-end heartbeat">
                                <i class="bi bi-bookmark-fill text-danger"></i>
                                <span>Upcoming</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTopBanner from '@/components/SectionTopBanner.vue';
export default {
    name: 'EventSection',
    components: {
        SectionTopBanner,
    },
    computed: {
        events() {
            return this.$store.getters.getEvents;
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

<style scoped>
@keyframes heartbeat {

    0%,
    100% {
        transform: scale(1);
    }

    25%,
    75% {
        transform: scale(1.1);
    }

    50% {
        transform: scale(1.2);
    }
}

.heartbeat {
    animation: heartbeat 1.5s ease-in-out infinite;
}
</style>
