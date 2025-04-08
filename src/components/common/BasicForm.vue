<template>
    <div id="menu">
        <div id="logo-text">머니로그.zip</div>
        <div id="cashmonth-div">
            월간 요약
            <ul id="cashmonth-div-child">
                <li>달력</li>
                <li>통계</li>
            </ul>
        </div>
        <div id="cashreport-div">거래 내역</div>
        <div id="setting-div">설정</div>
    </div>
</template>

<script>
import "../../css/menubar.css";
export default {
    name: "MenuBar",
};
</script>
