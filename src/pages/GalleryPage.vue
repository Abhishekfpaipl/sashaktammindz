<template>
    <div class="container my-5 pb-5">
        <p class="text-start display-5 mb-5">Gallery</p>
        <lightgallery :settings="{ speed: 500, plugins: plugins }" :onInit="onInit" :onBeforeSlide="onBeforeSlide"
            class="row g-2">
            <a :href="image" class="col-md-4 " v-for="(image, index) in gallery" :key="index">
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
    // props: {
    //     images: {
    //         type: Array,
    //         required: true,
    //     },
    //     title: {
    //         type: String,
    //     }
    // },
    components: {
        Lightgallery,
    },
    data() {
        return {
            plugins: [lgThumbnail, lgZoom], // LightGallery plugins 
            gallery: [
                '/img/gallery/1.png',
                '/img/gallery/3.png',
                '/img/gallery/4.png',
                '/img/gallery/5.png',
                '/img/gallery/6.png',
                '/img/gallery/7.png',
                '/img/gallery/8.png',
                '/img/gallery/9.png',
            ],
        };
    },
    computed: {

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