<template>
    <div style="padding-top: 64px;">
        <div class="container pb-5 mb-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6">
                    <img src="/img/aboutUs.svg"
                        class="img-fluid" alt="" style="height: 300px;">
                </div>
                <div class="col-md-6">
                    <p class="text-start">Our mission is to deliver comprehensive 360-degree solutions that address
                        bullying, harassment,
                        and discrimination while fostering a culture of diversity, equity, inclusion, and belonging. We
                        are committed to creating environments where every individual feels valued, respected, and
                        empowered to thrive.</p>
                </div>
            </div>
            <AboutReportSection />
            <AutoScrolling :cards="companies" title="test" />
            <div class="my-5">
                <TeamSection imagePosition="right" :profiles="profiles" />    
            </div>
        </div>
    </div>
</template>
<script>
import TeamSection from '@/components/TeamSection.vue';
import AutoScrolling from '@/components/AutoScrolling.vue';
import AboutReportSection from '@/components/AboutReportSection.vue';

export default {
    name: "AboutUs",
    components: {
        TeamSection,
        AutoScrolling,
        AboutReportSection,
    },
    data() {
        return {
            companies: [
                'BOXCOWORLD PVT LTD.',
                'POWER SYSTEM OPERATION CORPORATION (POSOCO)',
                'SUEZ INDIA',
                'VIHAAN NETWORKS LTD.',
                'NDDB DAIRY SERVICES',
                'GALGOTIAS UNIVERSITY',
                'SAPIENS TECHNOLOGIES (1982) INDIA PVT. LTD.',
                'BUSINESS NETWORK INTERNATIONAL (DELHI CENTRAL REGION)',
                'INSTITUTE OF COMPANY SECRETARIES OF INDIA -NOIDA CHAPTER',
                'CONTEXT.EAT PVT. LTD',
                'ADIDAS TECHNICAL SERVICES',
                'GENEW INDIA TELECOM PVT. LTD.',
                'J.M. BAXI & CO. AND IT\'S ASSOCIATE COMPANIES',
                'CENTRE FOR DEVELOPMENT OF ADVANCED COMPUTING',
                'LPS BOSSARD PVT. LTD.',
                'TAXMANN PUBLICATIONS PVT. LTD.',
                'PRESCIENT HEALTHCARE GROUP'
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
<style lang="">

</style>