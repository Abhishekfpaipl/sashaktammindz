<template>
    <div>
        <Banner brandColorOne="#125252" v-observe />
        <div class="">
            <BookDemo :faqs="faqs" image-src="/img/consultant.jpg" title="let's book your free consultation"
                v-observe />
        </div>
        <div class="my-5" id="second">
            <PriceSection v-observe />
        </div>
        <div class="">
            <WhyChooseUs v-observe />
        </div>
        <div class="">
            <FaqSection :faqs="faqs"
                image-src="https://img.freepik.com/free-vector/faq-concept_23-2148147002.jpg?t=st=1731059934~exp=1731063534~hmac=01e606a08b6c748868ad94794bd8c7aed505335514611ec865482299b77c2bcb&w=740"
                title="Frequently asked questions" image-position="left" v-observe />
        </div>
        <div class="">
            <CustomCounter service="satisfied customers" :serviceCount="1000" category="years of expirence"
                :categoryCount="10" place="projects completed" :placeCount="1500"
                image="https://img.freepik.com/free-photo/horizontal-shot-happy-friends-point-fingers-you-gesture-indoor-make-choice-have-positive-expressions_273609-19000.jpg?t=st=1731059972~exp=1731063572~hmac=a96dd8f670c57b74e028e91923e692fb19568577f34aa0372bfb1b5a9719d4e3&w=996"
                title="Here's the Impact we have created" path="/about-us" v-observe />
        </div>
        <div class="my-5">
            <GallerySection :images="gallery" title="gallery" />
        </div>
        <div class="my-5">
            <GallerySection :images="awards" title="certificates" />
        </div>
    </div>
</template>
<script>
import Banner from "@/components/BannerSection.vue";
import BookDemo from "@/components/BookDemo.vue";
import PriceSection from "@/components/PriceSection.vue";
import FaqSection from "@/components/FaqSection.vue";
import CustomCounter from "@/components/CustomCounter.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import GallerySection from "@/components/GallerySection.vue";
export default {
    name: "HomePage",
    components: {
        Banner,
        BookDemo,
        PriceSection,
        FaqSection,
        CustomCounter,
        WhyChooseUs,
        GallerySection,
    },
    data() {
        return {
            gallery: [
                '/img/gallery/1.png',
                '/img/gallery/2.png', 
                '/img/gallery/4.png',
                '/img/gallery/5.png',
                '/img/gallery/6.png',
                '/img/gallery/7.png',
                '/img/gallery/8.png',
                '/img/gallery/9.png',
            ],
            awards: [
                "/img/certificates/1.png",
                "/img/certificates/2.png",
                "/img/certificates/3.png",
            ]
        }
    },
}
</script>
<style lang="">

</style>