<template>
    <div>
        <div class="container my-5">
            <p class="text-center display-4 mb-5">Trainings</p>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
                <div class="col " v-for="(training, index) in trainings" :key="index">
                    <router-link :to="'/training/' + training.sid" class="card h-100 p-3 rounded-4 text-decoration-none" style="background-color: var(--third-color);">
                        <p class="w-25 rounded-pill bg-danger text-capitalize text-white">{{ training.type }}</p>
                        <img :src="training.image" :alt="training.title" class="img-fluid rounded-4 border">
                        <div class="card-body">
                            <h5 class="card-title text-ellipsis2" style="min-height: 46px;">{{ training.title }}</h5>
                            <p class="card-text text-ellipsis3" style="min-height: 72px;">{{ training.description }}</p>
                            <button class="btn border-bottom text-white"
                                style="background-color: var(--primary-color);">Know more <i
                                    class="bi bi-arrow-right ms-2"></i></button>
                        </div>
                    </router-link>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
export default {
    name: "TrainingCard",
    data() {
        return {
        }
    },
    computed: {
        trainings() {
            return this.$store.getters.getTrainings;
        }
    }
}
</script>
<style scoped></style>