<script setup>
import { RouterLink, RouterView } from "vue-router";
import "../../css/menubar.css";
</script>

<template>
    <div id="menu">
        <div id="logo-text">
            <RouterLink to="/">머니로그.zip</RouterLink>
        </div>
        <div id="cashmonth-div">
            월간 요약
            <ul id="cashmonth-div-child">
                <RouterLink to="/cashmonth-calender"><li>달력</li></RouterLink>
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
    </div>
</template>
