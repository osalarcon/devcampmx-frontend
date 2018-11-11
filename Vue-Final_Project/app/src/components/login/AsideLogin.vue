<template>
<section>

    <video class="fit-image" autoplay="autoplay" loop>
        <source :src="backgroundLogin" type="video/mp4" />
    </video>

</section>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";
</style>

<script>
import backgroundLogin from "@/assets/background_login_video.mp4";

export default {
    data() {
        return {
            backgroundLogin: backgroundLogin
        };
    }
};
</script>
