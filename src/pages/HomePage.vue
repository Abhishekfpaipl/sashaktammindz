<template>
    <div>
        <!-- <Banner brandColorOne="#125252" v-observe /> -->
        <ImageTextSection image-src="/img/bannerNew.jpg" title="" :typingAnimation="false" heading="sashaktam mindz"
            subHeading="Let's create a safer workspace together" :button="true" buttonText="Take Demo Talk To Us"
            buttonRoute="/contact-us" image-alt="posh" :points="bannerPoints" text="" :imageFirst="false" />
        <EventSection logoUrl="/img/logo.png" sectionTitle="Upcoming Events" dates="12-13 DECEMBER 2024"
            location="Mumbai" title="Batch 4 - Registrations"
            description="Embark on an in-depth journey to master the complexities of conducting PoSH investigations with our comprehensive two-day workshop. Dive into the intricacies of evidence collection, witness examination, and the art of balancing the Principles of Natural Justice with practical, hands-on exercises, including two mock investigations and live report writing sessions."
            videoUrl="https://www.youtube.com/watch?v=pf-GH6yaVWQ" />
        <BlogSection />

        <ServicesCard />

        <div class="">
            <BookDemo :faqs="faqs" image-src="/img/consultant.jpg" title="let's book your free consultation"
                v-observe />
        </div>
        <div class="">
            <WhyChooseUs v-observe />
        </div>
        <div class="">
            <TeamSection />
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
        <NewGallerySection :images="gallery" title="Gallery" />
        <NewGallerySection :images="awards" title="Certificates" />
    </div>
</template>
<script>
// import Banner from "@/components/BannerSection.vue";
import ImageTextSection from "@/components/ImageTextSection.vue";
import BookDemo from "@/components/BookDemo.vue";
import FaqSection from "@/components/FaqSection.vue";
import CustomCounter from "@/components/CustomCounter.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import TeamSection from "@/components/TeamSection.vue";
import EventSection from "@/components/EventSection.vue";
import BlogSection from "@/components/BlogSection.vue";
import ServicesCard from "@/components/ServicesCard.vue";
import NewGallerySection from "@/components/NewGallerySection.vue";
export default {
    name: "HomePage",
    components: {
        ImageTextSection,
        // Banner,
        BookDemo,
        FaqSection,
        CustomCounter,
        WhyChooseUs,
        TeamSection,
        EventSection,
        BlogSection,
        ServicesCard,
        NewGallerySection,
    },
    data() {
        return {
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
            awards: [
                "/img/certificates/1.png",
                "/img/certificates/2.png",
                "/img/certificates/3.png",
            ],
            // bannerPoints: [
            //     "Setting up of Infrastructure",
            //     "Trainings and Skill Building",
            //     "Empanelment and Complaint handling",
            //     "Audit of Policies & Compliances"
            // ]
        }
    },
}
</script>
<style lang="">

</style>