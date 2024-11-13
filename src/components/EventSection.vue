<template>
    <div class="bg-light py-5">
        <div class="container">
            <h1 class="display-5 mb-5">{{ sectionTitle }}</h1>
            <router-link to="/events" class="d-flex justify-content-end align-items-center text-decoration-none text-dark mb-3 text-capitalize">see all events <i
                    class="bi bi-arrow-right ms-2 visit"></i></router-link>
            <div class="row align-items-center">
                <!-- Left Section -->
                <div class="col-md-6">
                    <div class="d-flex gap-3 align-items-center mb-3">
                        <div class="calendar-icon text-white p-3 rounded-circle me-3">
                            <i class="bi bi-calendar-event fs-4"></i>
                        </div>
                        <div class="text-start">
                            <h5 class="mb-0">{{ dates }}</h5>
                            <p class="small mb-0">{{ location }}</p>
                        </div>
                    </div>


                    <div class="text-start mb-4">
                        <h4>{{ title }}</h4>
                        <p class="text-muted">{{ description }}</p>
                    </div>
                    <div class="text-center text-md-end mb-4">
                        <img :src="logoUrl" alt="Workshop Logo" class="img-fluid" style="max-width:150px;" />
                    </div>
                </div>

                <!-- Right Section -->
                <div class="col-md-6">
                    <div class="video-container ratio ratio-16x9">
                        <iframe :src="formattedVideoUrl" title="Workshop Video" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventSection',
    props: {
        sectionTitle: String,
        dates: String,
        location: String,
        logoUrl: String,
        title: String,
        description: String,
        videoUrl: {
            type: String,
            required: true
        },
    },
    computed: {
        formattedVideoUrl() {
            // Convert any YouTube link to embed format
            return this.videoUrl.replace("watch?v=", "embed/");
        }
    }
}
</script>

<style scoped>
.time-block {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    min-width: 80px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.calendar-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
}
</style>
