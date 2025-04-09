<script setup>
import "@/css/menubarmobile.css";
import { RouterLink } from "vue-router";
import { showMobileMenu } from "@/function/showMobileMenu";

const { showMenu, menuRef, toggleMenu } = showMobileMenu();
</script>

<template>
    <!-- 상단 배너 -->
    <header>
        <img
            id="menu-image"
            src="../../asset/image/menu.png"
            @click.stop="toggleMenu"
        />

        <!-- 어두운 배경 오버레이 -->
        <div v-if="showMenu" class="menu-overlay" @click="toggleMenu"></div>

        <!-- 메뉴바 -->
        <transition name="slide"
            ><div v-show="showMenu" id="mobile-menu" ref="menuRef" @click.stop>
                <div id="logo-text">
                    <RouterLink to="/">머니로그.zip</RouterLink>
                </div>

                <div id="cashmonth-div">
                    월간 요약
                    <ul id="cashmonth-div-child">
                        <RouterLink to="/cashmonth-calender"
                            ><li>달력</li></RouterLink
                        >
                        <RouterLink to="/cashmonth-statistics"
                            ><li>통계</li></RouterLink
                        >
                    </ul>
                </div>

                <div id="cashreport-div">
                    <RouterLink to="/cashreport">거래 내역</RouterLink>
                </div>

                <div id="setting-div">
                    <RouterLink to="/setting">설정</RouterLink>
                </div>
            </div></transition
        >

        머니로그.zip
        <RouterLink to="/"
            ><img id="logo-image" src="../../asset/image/logo.png"
        /></RouterLink>
    </header>
</template>
