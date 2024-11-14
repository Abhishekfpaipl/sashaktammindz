<template>
    <div class="py-5" style="padding-top: 64px !important;">

        <h1 class="text-center mb-5">{{ title }}</h1>
        <div class="container">
            <div class="row border p-1 my-2">
                <div class="col-lg-6 text-center mb-4">
                    <p class="text-center fs-3 text-capitalize mb-4">{{ training.title }}</p>
                    <img :src="training.image" class="img-fluid sticky-image" :alt="training.title">
                </div>

                <div class="col-lg-6 " style="background-color: var(--third-color);">
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
        <TopicCovered />
    </div>
</template>
<script>
import TopicCovered from '@/components/TopicCovered.vue';
export default {
    name: "ServiceDetailPage",
    components: {
        TopicCovered,
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