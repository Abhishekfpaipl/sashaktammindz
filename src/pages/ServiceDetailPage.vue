<template>
    <div class="py-5" style="padding-top: 64px !important;">
        <SectionTopBanner />
        <h1 class="text-center mb-5">{{ title }}</h1>
        <div class="container">
            <div class="row g-0 p-1">
                <div class="col-lg-6 text-center">
                    <!-- <p class="text-center fs-3 text-capitalize mb-4">{{ service.title }}</p> -->
                    <img :src="service.image" class="img-fluid" :alt="service.title">
                </div>

                <div class="col-lg-6 " style="background-color: var(--third-color);">
                    <div class="p-2 text-start">
                        <p class="mb-4 text-muted">{{ service.description }}</p>
                        <ul class="list-styled mb-4">
                            <li v-for="(title, index) in service.points" :key="index" class="mb-1">{{ title }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- <p class="text-start mb-4 text-muted">{{ service.description }}</p>
            <ul class="text-start list-styled mb-4">
                <li v-for="(title, index) in service.points" :key="index" class="mb-1">{{ title }}</li>
            </ul> -->
        </div>
        <div v-if="service.services" class="container">
            <h2 class="display-5 text-start my-5" style="color: var(--primary-color)">Services</h2>

            <div class="row g-4">
                <div v-for="(s, index) in service.services" :key="index" class="col-md-6 col-lg-3">
                    <div class="text-start h-100 p-4" style="background-color: var(--third-color);">
                        <div class="mb-3">
                            <i :class="s.icon" class="bi fs-1" style="color: var(--primary-color);"></i>
                        </div>
                        <div class="">
                            <h3 class="h5 mb-3">{{ s.title }}</h3>
                            <p class="small text-muted mb-0">{{ s.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="service.trainings" class="container my-5">
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 g-2">
                <div class="col" v-for="(training, index) in service.trainings" :key="'posh-' + index">
                    <router-link :to="'/training/' + training.sid" class="card h-100 rounded-4 text-decoration-none"
                        style="background-color: var(--third-color);">
                        <img :src="training.image" :alt="training.title" class="img-fluid m-1 rounded-4 border"
                            style="height: 180px; object-fit: cover;">
                            <p class="small card-body" style="min-height: 46px;">{{ training.title }}</p>
                        <div class="card-footer btn text-white" style="background-color: var(--primary-color);">
                            Know more <i class="bi bi-arrow-right ms-2 visit"></i>
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
    name: "ServiceDetailPage",
    components: {
        SectionTopBanner
    },
    computed: {
        service() {
            let serviceId = this.$route.params.serviceId;
            return this.$store.getters.getService(serviceId);
        },
    }
}
</script>
<style scoped>
.img-fluid {
    max-width: 100%;
    /* height: 250px; */
}

@media (min-width: 768px) {

    /* Only apply sticky positioning on desktop view */
    .sticky-image {
        position: sticky;
        top: 10%;
        /* Adjust top value as per your layout */
    }
}
</style>