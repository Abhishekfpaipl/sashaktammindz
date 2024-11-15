<template>
    <div style="padding-top: 64px !important;">
        <div class="container my-5">
            <!-- Posh Trainings Section -->
            <div v-if="poshTrainings.length" class="my-5">
                <p class="text-start display-5 text-uppercase" style="color: var(--primary-color);">Posh Trainings</p>
                <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-2">
                    <div class="col" v-for="(training, index) in poshTrainings" :key="'posh-' + index">
                        <router-link :to="'/training/' + training.sid" class="card h-100 rounded-4 text-decoration-none"
                            style="background-color: var(--third-color);">
                            <img :src="training.image" :alt="training.title" class="img-fluid m-1 rounded-4 border"
                                style="height: 180px; object-fit: cover;">
                            <p class="card-body p-1 small" style="min-height: 46px;">{{ training.title }}</p>
                            <div class="card-footer btn text-white" style="background-color: var(--primary-color);">Know
                                more <i class="bi bi-arrow-right ms-2"></i>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- pocso Trainings Section -->
            <div v-if="pocsoTrainings.length" class="my-5">
                <p class="text-start display-5 text-uppercase" style="color: var(--primary-color);">pocso Trainings</p>
                <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-2">
                    <div class="col" v-for="(training, index) in pocsoTrainings" :key="'pocso-' + index">
                        <router-link :to="'/training/' + training.sid" class="card h-100 rounded-4 text-decoration-none"
                            style="background-color: var(--third-color);">
                            <img :src="training.image" :alt="training.title" class="img-fluid m-1 rounded-4 border"
                                style="height: 180px; object-fit: cover;">
                            <p class="card-body p-1 small" style="min-height: 46px;">{{ training.title }}</p>
                            <div class="card-footer btn text-white" style="background-color: var(--primary-color);">Know
                                more <i class="bi bi-arrow-right ms-2"></i>
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
