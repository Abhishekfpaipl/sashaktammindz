<template>
    <div>
        <div class="container my-5">
            <!-- Posh Trainings Section -->
            <div v-if="poshTrainings.length" class="my-5">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <p class="display-5 text-uppercase" style="color: var(--primary-color);">Posh Trainings</p>
                    <router-link to="/posh-training" class="fs-5 text-decoration-none text-dark">
                        <span>See More</span>
                        <i class="ms-2 bi bi-arrow-right visit"></i>
                    </router-link>
                </div>
                <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-2">
                    <div class="col" v-for="(training, index) in poshTrainings.slice(0, 4)" :key="'posh-' + index">
                        <router-link :to="'/training/' + training.sid"
                            class="card h-100 p-1 rounded-4 text-decoration-none"
                            style="background-color: var(--third-color);">
                            <img :src="training.image" :alt="training.title" class="img-fluid rounded-4 border" style="height: 180px; object-fit: cover;">
                            <div class="card-body">
                                <p class="small" style="min-height: 46px;">{{ training.title }}</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-sm border-bottom text-white"
                                    style="background-color: var(--primary-color);">Know more <i
                                        class="bi bi-arrow-right ms-2 visit"></i></button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- pocso Trainings Section -->
            <div v-if="pocsoTrainings.length" class="my-5">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <p class="display-5 text-uppercase" style="color: var(--primary-color);">pocso Trainings</p>
                    <router-link to="/pocso-training" class="fs-5 text-decoration-none text-dark">
                        <span>See More</span>
                        <i class="ms-2 bi bi-arrow-right visit"></i>
                    </router-link>
                </div>
                <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-2">
                    <div class="col" v-for="(training, index) in pocsoTrainings.slice(0, 4)" :key="'pocso-' + index">
                        <router-link :to="'/training/' + training.sid"
                            class="card h-100 p-1 rounded-4 text-decoration-none"
                            style="background-color: var(--third-color);">
                            <img :src="training.image" :alt="training.title" class="img-fluid rounded-4 border" style="height: 180px; object-fit: cover;">
                            <div class="card-body">
                                <p class="small" style="min-height: 46px;">{{ training.title }}</p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-sm border-bottom text-white"
                                    style="background-color: var(--primary-color);">Know more <i
                                        class="bi bi-arrow-right ms-2 visit"></i></button>
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
    name: "TrainingCard",
    computed: {
        poshTrainings() {
            return this.$store.getters.getTrainings.filter(training => training.type === 'posh');
        },
        pocsoTrainings() {
            return this.$store.getters.getTrainings.filter(training => training.type === 'pocso');
        }
    }
}
</script>

<style scoped></style>
