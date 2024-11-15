<template>
    <div>
        <div class="modal fade" id="welcomeModal" tabindex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg " role="document">
                <div class="modal-content"
                    style="background-color: var(--primary-color);">
                    <div class="modal-body">
                        <div class="d-flex justify-content-between align-items-center text-white">
                            <h3 class="my-2 text-capitalize text-center">Raise Query</h3>
                            <i class="bi bi-x fs-1 " data-bs-dismiss="modal"></i>
                        </div>
                        <div class="row d-flex align-items-center">
                            <div class="col-md-6 mt-4 mt-md-0">
                                <img src="/img/subscribeModal.svg" style="width: 200px; max-width: 90%;" alt="">
                            </div>
                            <div class="col-md-6">
                                <ContactForm />
                            </div>
                        </div>
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
