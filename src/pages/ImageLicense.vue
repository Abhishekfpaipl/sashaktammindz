<template>
    <div style="padding-top: 64px;">
        <div class="container my-5 pb-5">
            <h2 class="text-center mb-4">Image License PDFs</h2>
            <div class="list-group">
                <div v-for="(license, index) in licenses" :key="index" class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <span>{{ license.name }}</span>
                        <div>
                            <button v-if="selectedLicenseIndex !== index" @click="selectedLicenseIndex = index"
                                class="btn btn-secondary btn-sm me-2">
                                Preview
                            </button>
                            <a :href="license.url" class="btn btn-primary btn-sm" download>
                                Download
                            </a>
                        </div>
                    </div>

                    <!-- PDF Preview -->
                    <div v-if="selectedLicenseIndex === index" class="mt-3">
                        <iframe :src="license.url" width="100%" height="500px" style="border: none;"></iframe>
                        <button @click="selectedLicenseIndex = null" class="btn btn-danger btn-sm mt-2">
                            Close Preview
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            licenses: [
                { name: "License 1", url: "/ImagesLicense/1.pdf" },
                { name: "License 2", url: "/ImagesLicense/2.pdf" },
                { name: "License 3", url: "/ImagesLicense/3.pdf" },
                { name: "License 4", url: "/ImagesLicense/4.pdf" },
                { name: "License 5", url: "/ImagesLicense/5.pdf" },
                { name: "License 6", url: "/ImagesLicense/6.pdf" },
                { name: "License 7", url: "/ImagesLicense/7.pdf" },
                { name: "License 8", url: "/ImagesLicense/8.pdf" },
                { name: "License 9", url: "/ImagesLicense/9.pdf" },
                { name: "License 10", url: "/ImagesLicense/10.pdf" },
                { name: "License 11", url: "/ImagesLicense/11.pdf" },
                { name: "License 12", url: "/ImagesLicense/12.pdf" },
                { name: "License 13", url: "/ImagesLicense/13.pdf" },
                { name: "License 14", url: "/ImagesLicense/14.pdf" },
                { name: "License 15", url: "/ImagesLicense/15.pdf" },
            ],
            selectedLicenseIndex: null,
        };
    },
};
</script>

<style scoped> 
</style>