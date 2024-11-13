<template>
    <div>
        <h2>Instagram Reels</h2>
        <div v-if="reels.length">
            <div v-for="reel in reels" :key="reel.id" class="reel">
                <video controls :src="reel.media_url" width="300"></video>
                <p>{{ reel.caption }}</p>
            </div>
        </div>
        <p v-else>Loading Reels...</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            reels: [], // Array to hold reel data
            // accessToken: 'IGQWRQV01tekNaRHp0Q0lRTFZAQN1I0WHVFTDZAmR21SYUkzSVlaVnBlelNiVHU4VEI1dThPalljTE9lRko4eWZAISENaN21fdFhuZAnVkc0tpVVVRZAHdSLWU1WmMzZAWFBbHB4ZAFN1eFAwdHJNd3JoaVhpUzFEclJzODgZD', // Insert your short-term access token here
            accessToken: 'IGQWRQeE1yS3Qtd1E2UUV2Y21MUXdURUlVNnFCcjU3NnNTTzdRM3hQRjN6SWxrdzJGTF9zOU1Pa3BYS2FTclpJWkFtLWVxUXp2STVmdmROalpvTTdVVFQtcG4zb2xLSDBNNkwySE1zNjNHVnQ5ZAlllblc3RS1oX3MZD'
        };
    },
    methods: {
        async fetchReels() {
            try {
                const response = await axios.get(
                    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${this.accessToken}`
                );
                // Filter only video type (Reels)
                this.reels = response.data.data.filter((media) => media.media_type === 'VIDEO');
            } catch (error) {
                console.error('Error fetching Instagram Reels:', error);
            }
        },
    },
    created() {
        this.fetchReels();
    },
};
</script>

<style>
.reel {
    margin-bottom: 20px;
}
</style>