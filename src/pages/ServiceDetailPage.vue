<template>
    <div class="py-5" style="padding-top: 64px !important;">

        <h1 class="text-center mb-5">{{ title }}</h1>
        <div class="container">
            <div class="row border p-1 my-2">
                <div class="col-lg-6 text-center mb-4">
                    <p class="text-center fs-3 text-capitalize mb-4">{{ service.title }}</p>
                    <img :src="service.image" class="img-fluid sticky-image" :alt="service.title">
                </div>

                <!-- service Details -->
                <div class="col-lg-6 " style="background-color: var(--third-color);">
                    <div class="p-2 text-start">
                        <p class="mb-4 text-muted">{{ service.description }}</p>
                        <ul class="list-styled mb-4">
                            <li v-for="(title, index) in service.points" :key="index" class="mb-1">{{ title }}</li>
                        </ul>

                        <!-- Read More Button -->
                        <div class="text-center">
                            <router-link :to="'/' + service.sid" class="btn text-white"
                                style="background-color: var(--primary-color);">
                                Read more <i class="bi bi-arrow-right"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <h2 class="text-center my-5">Services</h2>

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
    </div>
</template>
<script>
export default {
    name: "ServiceDetailPage",
    data() {
        return {

        }
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
    height: 250px;
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