<template>
    <div>
        <!-- <Banner brandColorOne="#125252" v-observe /> -->
        <BannerSection />
        <!-- <ImageTextSection image-src="/img/bannerNew.png" title="" :typingAnimation="false" heading="सshaktaम् Mindz"
            subHeading="Let's create a safer workspace together" :button="true" buttonText="Take Demo"
            buttonRoute="/free-trial" :button2="true" buttonText2="Talk To Us" buttonRoute2="/contact-us"
            image-alt="posh" :points="bannerPoints" text="" :imageFirst="false" /> -->
        <EventSection logoUrl="/img/logo.png" sectionTitle="Upcoming Events" dates="12-13 DECEMBER 2024"
            location="Mumbai" title="Batch 4 - Registrations"
            description="Embark on an in-depth journey to master the complexities of conducting PoSH investigations with our comprehensive two-day workshop. Dive into the intricacies of evidence collection, witness examination, and the art of balancing the Principles of Natural Justice with practical, hands-on exercises, including two mock investigations and live report writing sessions."
            videoUrl="https://www.youtube.com/watch?v=pf-GH6yaVWQ" />
        <div class="my-5">
            <BlogSection />
        </div>
        <div class="my-5">
            <ServicesCard />
        </div>
        <div class="my-5">
            <TrainingCard />
        </div>
        <div class="my-5">
            <TextSection image-src="/img/consultation.png" title="free consultation"
                description="Book a free consultation to discuss your needs with our expert team. Whether you're exploring treatment options, seeking professional advice, or have questions, our consultation offers personalized guidance at no cost. Start your journey towards informed decisions and tailored solutions by scheduling your free session today!"
                routeLink="/free-trial" imagePosition="right" v-observe />
        </div>
        <!-- <div class="my-5">
            <WhyChooseUs v-observe />
        </div> -->
        <div class="my-5">
            <OurJourney v-observe />
        </div>
        <div class="my-5">
            <ReviewSection v-observe />
        </div>
        <div class="my-5">
            <TeamSection imagePosition="right" :profiles="profiles" />
        </div>
        <div class="my-5">
            <TextSection image-src="/img/faq.png" title="Frequently asked questions"
                description="Find answers to your most common questions in our FAQs section. We’ve compiled helpful information to guide you. If you can’t find what you're looking for, feel free to reach out to our team for further assistance!"
                routeLink="/faqs" imagePosition="right" v-observe />
        </div>
        <div class="my-5">
            <NewGallerySection :images="gallery" title="Gallery" route="/gallery" />
        </div>
        <div class="my-5">
            <CustomCounter service="satisfied customers" :serviceCount="800" category="Employees Trained"
                :categoryCount="400" image="/img/happyCustomers.png" title="What we have done" path="/about-us"
                v-observe />
        </div>
        <div class="my-5">
            <NewGallerySection :images="awards" title="Certificates" route="/certificates" />
        </div>
        <div class="my-5">
            <!-- <TestSection />  -->
        </div>
    </div>
</template>
<script>
// import Banner from "@/components/BannerSection.vue";
import BannerSection from "@/components/BannerSection.vue";
// import ImageTextSection from "@/components/ImageTextSection.vue";
import CustomCounter from "@/components/CustomCounter.vue";
// import WhyChooseUs from "@/components/WhyChooseUs.vue";
import TeamSection from "@/components/TeamSection.vue";
import EventSection from "@/components/EventSection.vue";
import BlogSection from "@/components/BlogSection.vue";
import ServicesCard from "@/components/ServicesCard.vue";
import NewGallerySection from "@/components/NewGallerySection.vue";
import TextSection from "@/components/TextSection.vue";
import ReviewSection from "@/components/ReviewSection.vue";
import OurJourney from "@/components/OurJourney.vue";
// import TrainingCard from "@/components/TrainingCard.vue";
// import TestSection from "@/components/TestSection.vue";
export default {
    name: "HomePage",
    components: {
        // ImageTextSection,
        BannerSection,
        CustomCounter,
        // WhyChooseUs,
        TeamSection,
        EventSection,
        BlogSection,
        ServicesCard,
        NewGallerySection,
        TextSection,
        ReviewSection,
        OurJourney,
        // TrainingCard,
        // TestSection,
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
        }
    },
    computed: {
        profiles() {
            return this.$store.getters.getProfiles;
        }
    }
}
</script>
<style scoped></style>