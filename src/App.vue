<script setup>
import { useMediaQuery } from "@vueuse/core";
import MenuBar from "./components/common/MenuBar.vue";
import MenuBarMobile from "./components/common/MenuBarMobile.vue";

const isMobile = useMediaQuery("(max-width: 394px)");
</script>

<template>
    <div id="container">
        <component :is="isMobile ? MenuBarMobile : MenuBar" />
        <div id="page-rendering-div"><RouterView /></div>
    </div>
</template>
