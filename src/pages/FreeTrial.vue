<template>
    <div style="padding-top: 64px;">
        <div class="container mb-5 pb-5">
            <div class="row">
                <div class="col-12 col-md-6 py-3 text-center px-4 px-md-2">
                    <h1 class="mt-3">Schedule your free consultation</h1>
                    <p class="fs-5 ">Discover how we can support your legal journey, safeguard your rights, and provide expert guidance tailored to your needs.</p>
                    <ContactForm />
                </div>
                <div class="col-12 col-md-6 p-3">
                    <img src="/img/free-trial.svg" class="" style="width:250px; object-fit: contain;" alt="">
                    <p class="text-center mt-4 text-capitalize">during this 30-minute free consultation, you'll receive</p>
                    <div class="d-flex gap-2 justify-content-start justify-content-md-center align-items-center"
                        v-for="(benefit, index) in benefits" :key="index">
                        <i class="bi bi-check text-success fs-4"></i>
                        <p class="my-1 text-start">{{ benefit }}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
    components: {
        ContactForm
    },
    data() {
        return {
            benefits: [
                "Guidance on your legal rights and options.",
                "A roadmap for navigating your legal issues.",
                "Strategies to strengthen your case and protect your interests.",
            ],
            name: '',
            note: '',
        }
    },
    methods: {
        submitQuery() {
            if (this.name && this.note) {
                const phoneNumber = '919312765888'; // Replace with your WhatsApp number
                const message = `Hello, my name is ${this.name}. I would like to schedule a 30-minute free consultation. Additional notes: ${this.note}.`;
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                this.name = "";
                this.note = "";
            }
        },
        openDialer() {
            const phoneNumber = 919312765888;
            window.location.href = `tel:${phoneNumber}`;
        },
    }
}
</script>
