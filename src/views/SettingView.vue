<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import "../css/setting_PC.css";
import "../css/setting_mobile.css";
import "../css/fontlist.css"; // 폰트 CSS 추가
import "../css/themelist.css";
import { useSetting } from "../function/fonts.js"; // 만든 훅 import

const userInfo = ref({
    name: "",
    nickname: "",
    email: "",
});

const mode = ref("light");
const themeColor = ref("Basic");
const fontSetting = ref("Black Han Sans");

const { changeFont } = useSetting(); // 커스텀 훅 사용

onMounted(async () => {
    const res = await axios.get("http://localhost:3001/userInfo/1");
    userInfo.value = res.data;
    mode.value = res.data.mode || "light";
    fontSetting.value = res.data.fontSetting || "Black Han Sans";
    changeFont(fontSetting.value); // 페이지 들어올 때 설정된 폰트 적용
});

watch(themeColor, (newTheme) => {
    document.body.classList.remove(
        "theme-basic",
        "theme-orange",
        "theme-babypink"
    );

    const themeClass = `theme-${newTheme.toLowerCase()}`;
    document.body.classList.add(themeClass);
});

watch(fontSetting, (newFont) => {
    changeFont(newFont); // 사용자가 select로 폰트 바꿀 때 즉시 적용
});

const saveSettings = async () => {
    try {
        await axios.patch("http://localhost:3001/userInfo/1", {
            name: userInfo.value.name,
            nickname: userInfo.value.nickname,
            email: userInfo.value.email,
            mode: mode.value,
            themeColor: themeColor.value,
            fontSetting: fontSetting.value,
        });

        if (mode.value === "dark") {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }

        alert("설정이 저장되었습니다!");
    } catch (error) {
        console.error("저장 실패:", error);
        alert("저장에 실패했습니다.");
    }
};
</script>
<template>
    <!-- 컴포넌트 전체를 감싸는 페이지 -->
    <div class="page-wrapper">
        <!-- 개인정보 카드 -->
        <h2>개인정보</h2>
        <div class="cardinfo">
            <div class="profile-pic"></div>
            <div>
                <label>사용자 이름</label>
                <input
                    type="text"
                    v-model="userInfo.name"
                    placeholder="사용자 이름 입력해주세요."
                />
            </div>
            <div>
                <label>닉네임</label>
                <input
                    type="text"
                    v-model="userInfo.nickname"
                    placeholder="사용자 닉네임 입력해주세요."
                />
            </div>
            <div>
                <label>E-mail</label>
                <input
                    type="text"
                    v-model="userInfo.email"
                    placeholder="사용자 이메일 입력해주세요."
                />
            </div>
        </div>
        <!-- 설정 카드 -->
        <h2>설정</h2>
        <div class="cardsetting">
            <label>테마색상 </label>
            <select v-model="themeColor">
                <option>Basic</option>
                <option>Orange</option>
                <option>BabyPink</option>
            </select>
            <br />
            <label>폰트 설정 </label>
            <select v-model="fontSetting">
                <option>Black Han Sans</option>
                <option>Sunflower</option>
                <option>Do hyeon</option>
            </select>
            <div class="mode-toggle">
                <input type="radio" value="dark" v-model="mode" />
                다크모드
                <input type="radio" value="light" v-model="mode" />
                라이트모드
            </div>
        </div>
        <button class="submit-button" type="submit" @click="saveSettings">
            저장
        </button>
    </div>
</template>
