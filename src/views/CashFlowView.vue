<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import categoryData from '../stores/categorydata.js';
import axios from 'axios';
import '../css/cashflow_PC.css';
import '../css/cashflow_mobile.css';

const type = ref('income');
const nextId = ref(1);

const form = reactive({
  id: 1,
  type: 'income',
  date: '',
  amount: 0,
  category: '',
  memo: '',
});

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3001/cashflows');
    const data = res.data;
    if (data.length > 0) {
      const maxId = Math.max(...data.map((item) => item.id));
      nextId.value = maxId + 1;
    }
  } catch (error) {
    console.log('id 최신화 실패: ', error);
  }
});

const categoryOptions = computed(() => {
  return categoryData[type.value] || [];
});
const setType = (newType) => {
  type.value = newType;
  form.type = newType;
};

const handleSubmit = async () => {
  form.id = String(nextId.value);

  //  현재 시간 생성 (ISO 문자열 형식)
  const createdAt = new Date().toISOString();

  try {
    //  createdAt 포함해서 post 전송
    await axios.post('http://localhost:3001/cashflows', {
      ...form,
      createdAt, // 새 속성 추가
    });

    console.log('저장 성공!');

    // 입력 필드 초기화
    form.date = '';
    form.amount = 0;
    form.category = '';
    form.memo = '';
    nextId.value += 1;
  } catch (error) {
    console.error('저장 실패:', error);
  }

  console.log('수입/지출내역 저장됨', { ...form, createdAt });
};
</script>

<template>
  <div class="page-wrapper">
    <div class="cashflow-container">
      <!-- <header class="topbar">
        <button class="menu-button">
          <img src="../asset/menu.png" alt="메뉴" />
        </button>
        <span class="title">{{ type === 'income' ? '수입' : '지출' }}</span>
        <img class="logo" src="../asset/logo.png" alt="" />
      </header>
      이부분은 모바일 상단 bar코드입니다! -->
      <div class="content">
        <div class="button-group">
          <button :class="{ incomeactive: type === 'income' }" @click="setType('income')">수입</button>
          <button :class="{ expenseactive: type === 'expense' }" @click="setType('expense')">지출</button>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>날짜</label>
            <input type="date" v-model="form.date" />
          </div>
          <div class="form-group">
            <label>금액</label>
            <input type="number" v-model="form.amount" placeholder="ex: 10000" />
          </div>
          <div class="form-group">
            <label>카테고리</label>
            <select v-model="form.category">
              <option value="">선택</option>
              <option v-for="item in categoryOptions" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>메모</label>
            <input type="text" v-model="form.memo" placeholder="메모를 입력하세요" />
          </div>
          <button class="submit-button" type="submit">저장</button>
        </form>
      </div>
    </div>
  </div>
</template>
