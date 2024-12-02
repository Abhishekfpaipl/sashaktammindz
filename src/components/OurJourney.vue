<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Our Journey, Marked by Milestones - and Still Going Strong</h2>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-md-3 text-center">
                <div class="d-flex fs-3 justify-content-center align-items-center gap-2">
                    <AutoCounter data="3" />
                    <span>Lakh +</span>
                </div>
                <p>Individuals Trained</p>
            </div>
            <div class="col-md-3 text-center">
                <div class="d-flex fs-3 justify-content-center align-items-center gap-2">
                    <AutoCounter data="2000" />
                    <span>+</span>
                </div>
                <p>Conducted Training and Awareness Programs</p>
            </div>
            <div class="col-md-3 text-center">
                <div class="d-flex fs-3 justify-content-center align-items-center gap-2">
                    <AutoCounter data="1000" />
                    <span>+</span>
                </div>
                <p>Conducted Inquiries and Conciliations</p>
            </div>
            <div class="col-md-3 text-center">
                <div class="d-flex fs-3 justify-content-center align-items-center gap-2">
                    <AutoCounter data="500" />
                    <span>+</span>
                </div>
                <p>Organizations and Educational Institutions</p>
            </div>
        </div>
    </div>
</template>

<script>
import AutoCounter from '@/components/AutoCounter.vue';
export default {
    name: 'OurJourney',
    components: {
        AutoCounter
    }
}
</script>

<style scoped>
h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
}

h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

p {
    font-size: 1.1rem;
    color: #555;
}
</style>