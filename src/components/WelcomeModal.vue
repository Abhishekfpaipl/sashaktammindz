<template>
    <div>
        <div class="modal fade" id="welcomeModal" tabindex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg " role="document">
                <div class="modal-content text-bg-white position-relative" style="">
                    <div class="modal-body">
                        <h3 class="my-2 text-capitalize text-center">Book Appointment</h3>
                        <div class="row d-flex align-items-center">
                            <div class="col-md-6 mt-4 mt-md-0">
                                <img src="/img/logo1.png" style="width: 200px; max-width: 90%;" alt="">
                            </div>
                            <div class="col-md-6">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute rounded-circle wh-40 text-white px-2 p-1 end-0"
                        data-bs-dismiss="modal" style="top: -3%; background-color: var(--bg-primary);">
                        <i class="bi bi-x fs-5"></i>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
    components: {
        ContactForm,
    }, 
};
</script> 
