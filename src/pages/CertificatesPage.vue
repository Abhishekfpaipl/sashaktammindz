<template>
    <div class="container mt-5">
        <p class="text-start display-5 mb-5">{{ title }}</p>
        <lightgallery :settings="{ speed: 500, plugins: plugins }" :onInit="onInit" :onBeforeSlide="onBeforeSlide"
            class="row g-2">
            <a :href="image" class="col-md-4 " v-for="(image, index) in images" :key="index">
                <img :alt="'img' + (index + 1)" :src="image" class="card-img-top border" />
            </a>
        </lightgallery>
    </div>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

export default {
    props: {
        images: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
        }
    },
    components: {
        Lightgallery,
    },
    data() {
        return {
            plugins: [lgThumbnail, lgZoom], // LightGallery plugins 
        };
    },
    methods: {
        onInit() {
            console.log('lightGallery has been initialized');
        },
        onBeforeSlide() {
            console.log('calling before slide');
        },
    },
};
</script>

<style scoped>
.card-img-top {
    height: 200px;
    object-fit: cover;
    object-position: top center;
}
</style>