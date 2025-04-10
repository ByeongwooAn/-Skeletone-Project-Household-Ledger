<script setup>
import { useMediaQuery } from "@vueuse/core";
import MenuBar from "@/components/common/MenuBar.vue";
import MenuBarMobile from "@/components/common/MenuBarMobile.vue";

const isMobile = useMediaQuery("(max-width: 393px)");
</script>

<template>
    <div id="container">
        <div><component :is="isMobile ? MenuBarMobile : MenuBar" /></div>

        <div id="page-rendering-div"><RouterView /></div>
    </div>
</template>
<style scoped>
#container {
    display: flex; /* 가로로 배치 */
}
</style>
