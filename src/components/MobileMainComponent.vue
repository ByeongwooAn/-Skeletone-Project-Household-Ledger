<script setup>
import "../css/mainviewmobile.css";
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="page-wrapper">
        <div id="mobile-main-div1" class="mobile-mainview-div">
            <div id="mobile-mainview-text1" class="mobile-mainview-text">
                4월 수입 지출 총액
            </div>
            <div id="mobile-main-adttribute1" class="mobile-main-attribute-div">
                수입 총액
            </div>
            <div id="mobile-main-adttribute2" class="mobile-main-attribute-div">
                지출 총액
            </div>
        </div>
        <div id="mobile-main-div2" class="mobile-mainview-div">
            <div id="mobile-mainview-text2" class="mobile-mainview-text">
                월간 수입 지출 비율
            </div>
        </div>
        <div id="mobile-main-div3" class="mobile-mainview-div">
            <div id="mobile-mainview-text3" class="mobile-mainview-text">
                4월 최근 거래 내역
            </div>
            <div
                id="mobile-main-deal-report1"
                class="mobile-main-attribute-div"
            >
                거래 내역1
            </div>
            <div
                id="mobile-main-deal-report2"
                class="mobile-main-attribute-div"
            >
                거래 내역2
            </div>
            <div
                id="mobile-main-deal-report3"
                class="mobile-main-attribute-div"
            >
                거래 내역3
            </div>
            <div
                id="mobile-main-deal-report4"
                class="mobile-main-attribute-div"
            >
                거래 내역4
            </div>
            <div
                id="mobile-main-deal-report5"
                class="mobile-main-attribute-div"
            >
                거래 내역5
            </div>
        </div>
        <RouterLink to="/cashflow"
            ><div id="mobile-main-div4" class="mobile-mainview-div">
                <div id="mobile-mainview-text4" class="mobile-mainview-text">
                    새 거래 내역 추가 +
                </div>
            </div></RouterLink
        >
    </div>
</template>
