<template>
    <div class="container my-5">
        <div class="row align-items-center">
            <div :class="[
                'col-12 col-md-6 text-md-start text-center',
                { 'order-md-2 text-md-end': imagePosition === 'left' }
            ]">
                <h1 class="display-4 text-uppercase mb-4">
                    two highly<br>
                    accomplished<br>
                    <span class="fw-bold" style="color:var(--bg-primary) !important">Advocates</span>
                </h1>
            </div>
            <div :class="[
                'col-12 col-md-6',
                { 'order-md-1': imagePosition === 'left' }
            ]">
                <div class="row">
                    <div v-for="(profile, index) in profiles" :key="index" class="col-6 mb-3">
                        <img :src="profile.image" :alt="profile.name" class="img-fluid rounded mb-2"
                            style="height: 300px;">
                        <h3 class="h5 mb-0">{{ profile.name }}</h3>
                        <p class="text-muted">{{ profile.qualifications }}</p>
                        <router-link :to="'/our-team/' + profile.sid" class="btn text-white"
                            style="background-color: var(--primary-color);">Know more <i
                                class="bi bi-right-arrow"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DentalTeamSection',
    props: {
        imagePosition: {
            type: String,
            default: 'left',
            validator: (value) => ['left', 'right'].includes(value)
        },
        profiles: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.text-primary {
    color: #007bff !important;
}
</style>