<script setup>
import "../css/mainview.css";
import { RouterLink } from "vue-router";
</script>

<template>
    <div id="main-view-box">
        <div id="main-attribute-div1">
            <div id="recent-deal-first">최근 거래 내역 1</div>
            <div id="recent-deal">최근 거래 내역 2</div>
            <div id="recent-deal">최근 거래 내역 3</div>
            <div id="recent-deal">최근 거래 내역 4</div>
            <div id="recent-deal">최근 거래 내역 5</div>
        </div>

        <div id="main-attribute-div2">
            <div id="recent-deal-first">4월 총 수입</div>
            <div id="recent-deal">4월 총 지출</div>
        </div>

        <div id="main-attribute-div3"></div>

        <div id="main-attribute-div4">
            <RouterLink to="/cashflow">새 거래 내역 추가 +</RouterLink>
        </div>
    </div>
</template>
