<template>
    <div style="background: linear-gradient(180deg, rgba(169,37,130,1) 0%, rgba(252,240,255,1) 95%);">
        <!-- Hero Section -->
        <div class="text-center fw-bold py-5 text-white">
            <p class="fs-1">Privacy Policy</p>
        </div>

        <!-- Privacy Policy Content Section -->
        <div class="container py-5 rounded-top-5" style="margin-top: -40px; background-color: var(--third-color);">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8">
                    <div class="card border-0 text-start bg-transparent">
                        <div class="">
                            <!-- Heading -->
                            <h1 class="display-4 text-primary">Privacy Policy</h1>

                            <!-- Last Update Info -->
                            <p class="text-muted">Last updated: <strong>08/2024</strong></p>

                            <!-- Introduction -->
                            <p>Advocate Noopur Singhal and Associates ("we", "us", or "our") are committed to protecting
                                your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                                your personal information when you visit our website, engage with our legal services, or
                                interact with us in other ways. By using our services, you consent to the collection and
                                use of information in accordance with this policy.</p>

                            <!-- Sections -->
                            <div v-for="(section, index) in policySections" :key="index">
                                <h2 class="mt-4">{{ section.title }}</h2>
                                <div v-for="(subsection, subIndex) in section.subsections" :key="subIndex">
                                    <h3>{{ subsection.title }}</h3>
                                    <p v-if="subsection.type === 'paragraph'">{{ subsection.content }}</p>
                                    <ul v-else>
                                        <li v-for="(item, itemIndex) in subsection.content" :key="itemIndex">{{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Contact Information -->
                            <h2 class="mt-4">10. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy or need further information, please
                                contact us:</p>
                            <p>
                                Advocate Noopur Singhal & Associates<br>
                                Email: <a href="mailto:noopur@sashaktammindz.com"
                                    class="text-primary">noopur@sashaktammindz.com</a><br>
                                Phone: <a href="tel:+919312765888" class="text-primary">+919312765888</a><br>
                                Address: 20, Onward Workspaces, First Floor, Okhla Industrial Estate, Phase-3, New
                                Delhi-110020
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PrivacyPolicy',
    data() {
        return {
            policySections: [
                {
                    title: '1. Information We Collect',
                    subsections: [
                        {
                            title: '1.1 Personal Information',
                            type: 'list',
                            content: [
                                'Name',
                                'Email address',
                                'Phone number',
                                'Address',
                                'Billing information',
                                'Documents related to your legal matter'
                            ]
                        },
                        {
                            title: '1.2 Usage Data',
                            type: 'list',
                            content: [
                                'IP address',
                                'Browser type',
                                'Pages visited',
                                'Time and date of your visit',
                                'Duration of time spent on pages',
                                'Other diagnostic data'
                            ]
                        }
                    ]
                },
                {
                    title: '2. How We Use Your Information',
                    subsections: [
                        {
                            title: '',
                            type: 'list',
                            content: [
                                'Provide and maintain our legal services',
                                'Communicate with you regarding your legal matters',
                                'Notify you about changes to our services',
                                'Provide customer support and legal advice',
                                'Monitor and analyze usage of our website and services',
                                'Detect, prevent, and address legal issues',
                                'Send promotional materials or updates regarding our services (unless you opt out)'
                            ]
                        }
                    ]
                },
                {
                    title: '3. Data Security',
                    subsections: [
                        {
                            title: '',
                            type: 'paragraph',
                            content: 'We take reasonable steps to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes implementing secure storage, encryption methods, and access control. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.'
                        }
                    ]
                },
                {
                    title: '4. Data Retention',
                    subsections: [
                        {
                            title: '',
                            type: 'paragraph',
                            content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy. This includes retaining your information to comply with legal obligations, resolve disputes, and enforce agreements. We may also retain your information for record-keeping as required under Indian law.'
                        }
                    ]
                },
                {
                    title: '5. Disclosure of Data',
                    subsections: [
                        {
                            title: '',
                            type: 'list',
                            content: [
                                'To comply with a legal obligation or court order',
                                'To protect and defend our rights, property, or interests',
                                'To prevent or investigate possible fraud or unlawful activity',
                                'To protect the personal safety of individuals or the public',
                                'To comply with any legal, regulatory, or compliance requirement'
                            ]
                        }
                    ]
                },
                {
                    title: '6. Third-Party Service Providers',
                    subsections: [
                        {
                            title: '',
                            type: 'paragraph',
                            content: 'We may employ third-party companies and individuals to facilitate our legal services, provide services on our behalf, perform service-related tasks, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.'
                        }
                    ]
                },
                {
                    title: '7. Your Data Protection Rights',
                    subsections: [
                        {
                            title: '',
                            type: 'list',
                            content: [
                                'The right to access, update, or delete your personal information',
                                'The right to rectify inaccurate or incomplete information',
                                'The right to object to or restrict processing of your personal information',
                                'The right to request data portability, where applicable',
                                'The right to withdraw consent, where we rely on consent as a legal basis for processing your data'
                            ]
                        }
                    ]
                },
                {
                    title: '8. Children\'s Privacy',
                    subsections: [
                        {
                            title: '',
                            type: 'paragraph',
                            content: 'Our services are not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18 without parental consent, we will take steps to remove that information as quickly as possible.'
                        }
                    ]
                },
                {
                    title: '9. Changes to This Privacy Policy',
                    subsections: [
                        {
                            title: '',
                            type: 'paragraph',
                            content: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped> 

</style>
