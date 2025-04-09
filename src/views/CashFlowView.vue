<template>
    <div class="cashflow-container">
        <header class="topbar">
            <button class="menu-button">
                <img src="../asset/menu.png" alt="메뉴" />
            </button>
            <span class="title">{{ type === "income" ? "수입" : "지출" }}</span>
            <img class="logo" src="../asset/image/logo.png" alt="" />
        </header>

        <div class="content">
            <div class="button-group">
                <button
                    :class="{ incomeactive: type === 'income' }"
                    @click="type = 'income'"
                >
                    수입
                </button>
                <button
                    :class="{ expenseactive: type === 'expense' }"
                    @click="type = 'expense'"
                >
                    지출
                </button>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label>날짜</label>
                    <input type="date" v-model="form.date" />
                </div>
                <div class="form-group">
                    <label>금액</label>
                    <input
                        type="number"
                        v-model="form.amount"
                        placeholder="ex: 10000"
                    />
                </div>
                <div class="form-group">
                    <label>카테고리</label>
                    <select v-model="form.category">
                        <option value="">선택</option>
                        <option
                            v-for="item in categoryOptions"
                            :key="item"
                            :value="item"
                        >
                            {{ item }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>메모</label>
                    <input
                        type="text"
                        v-model="form.memo"
                        placeholder="메모를 입력하세요"
                    />
                </div>
                <button class="submit-button" type="submit">저장</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import categoryData from "../stores/categorydata.js";
import "../css/cashflow_mobile.css";

const type = ref("income");

const form = reactive({
    date: "",
    amount: 0,
    category: "",
    memo: "",
});

const categoryOptions = computed(() => {
    return categoryData[type.value] || [];
});

const handleSubmit = () => {
    console.log("수입/지출내역 저장됨", type.value, form);
};
</script>
