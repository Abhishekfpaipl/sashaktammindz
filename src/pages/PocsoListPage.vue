<template>
    <div style="padding-top: 64px !important;">
        <div class="container my-5">
            <!-- pocso Trainings Section -->
            <div v-if="pocsoTrainings.length" class="my-5">
                <p class="text-center display-5" style="color: var(--primary-color);">pocso Trainings</p>
                <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-2">
                    <div class="col" v-for="(training, index) in pocsoTrainings" :key="'pocso-' + index">
                        <router-link :to="'/training/' + training.sid"
                            class="card h-100 p-1 rounded-4 text-decoration-none"
                            style="background-color: var(--third-color);">
                            <img :src="training.image" :alt="training.title" class="img-fluid rounded-4 border"
                                style="height: 180px; object-fit: cover;">
                            <div class="card-body">
                                <p class="small" style="min-height: 46px;">{{ training.title }}</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-sm border-bottom text-white"
                                    style="background-color: var(--primary-color);">Know more <i
                                        class="bi bi-arrow-right ms-2"></i></button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TrainingListPage",
    computed: {
        pocsoTrainings() {
            return this.$store.getters.getTrainings.filter(training => training.type === 'pocso');
        }
    }
}
</script>

<style scoped></style>
