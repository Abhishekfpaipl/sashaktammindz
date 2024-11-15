<template>
    <div class="py-5" style="padding-top: 64px !important;">
        <div class="banner-container">
            <img src="/img/trainingBanner.jpg" alt="Product Banner" class="banner-image">
            <div class="overlay">
                <h1 class="display-4 banner-title">{{ pageName }}</h1>
            </div>
        </div>
        <h1 class="text-center mb-5">{{ title }}</h1>
        <div class="container">
            <p class="text-center fs-3 text-capitalize mb-4">{{ training.title }}</p>
            <div class="row g-0 my-2 align-items-center" style="background-color: var(--third-color);">
                <div class="col-lg-6 text-center">
                    <img :src="training.image" class="img-fluid" :alt="training.title">
                </div>

                <div class="col-lg-6 ">
                    <div class="p-2 text-start">
                        <p class="mb-4 text-muted">{{ training.description }}</p>
                        <ul class="list-styled mb-4">
                            <li v-for="(title, index) in training.points" :key="index" class="mb-1">{{ title }}</li>
                        </ul>

                        <div class="text-center">
                            <router-link :to="'/' + training.sid" class="btn text-white"
                                style="background-color: var(--primary-color);">
                                Read more <i class="bi bi-arrow-right"></i>
                            </router-link>
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
    components: {
    },
    data() {
        return {
            pageName: ''
        };
    },
    mounted() {
        let pageName = this.$route.path.split('/').pop();
        this.pageName = pageName.replace(/-/g, ' ');
    },
    computed: {
        training() {
            let trainingId = this.$route.params.trainingId;
            return this.$store.getters.getTraining(trainingId);
        },
    }
}
</script>
<style scoped>
@media (min-width: 768px) {

    /* Only apply sticky positioning on desktop view */
    .sticky-image {
        position: sticky;
        top: 10%;
        /* Adjust top value as per your layout */
    }
}

.banner-container {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.banner-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: top;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(126, 1, 128, 0.5);
    opacity: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.banner-title {
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    /* Improved readability */
}
</style>