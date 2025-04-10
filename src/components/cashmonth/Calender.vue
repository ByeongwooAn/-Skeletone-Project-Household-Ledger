<script setup>
import { ref, onMounted } from "vue";
import { useCalendar } from "@/function/calender.js";
import ApiService from "@/function/apiService";
import "../../css/calender.css";

const cashflowsByDate = ref({});
const selectedDate = ref(null);
const incomeTotal = ref(0);
const expenseTotal = ref(0);

const {
    weekNames,
    currentYear,
    currentMonth,
    currentCalendarMatrix,
    init,
    onClickPrev,
    onClickNext,
    isToday,
} = useCalendar();

// API 호출 함수
async function getTypeTotal(type) {
    try {
        const res = await ApiService.getTypes(type);
        return res.data.reduce((sum, item) => sum + item.amount, 0);
    } catch (err) {
        console.error(`${type} 불러오기 실패`, err);
        return 0;
    }
}

onMounted(async () => {
    init();

    const res = await fetch("/db.json");
    const data = await res.json();

    const grouped = {};

    incomeTotal.value = await getTypeTotal("income");
    expenseTotal.value = await getTypeTotal("expense");

    data.cashflows.forEach((item) => {
        const date = item.date;
        if (!grouped[date]) {
            grouped[date] = { income: 0, expense: 0 };
        }
        grouped[date][item.type] += item.amount;
    });

    cashflowsByDate.value = grouped;
});

function selectDate(day) {
    const date = `${currentYear}-${String(currentMonth + 1).padStart(
        2,
        "0"
    )}-${String(day).padStart(2, "0")}`;
    selectedDate.value = date;
}
</script>

<template>
    <div id="calender">
        <h1 id="calender-title">
            <a href="#" @click.prevent="onClickPrev">◀</a>
            {{ currentYear }}년 {{ currentMonth }}월
            <a href="#" @click.prevent="onClickNext">▶</a>
        </h1>
        <table>
            <thead>
                <tr id="weekname-row">
                    <td
                        v-for="(weekName, index) in weekNames"
                        :key="index"
                        id="weekname-col"
                        :class="{
                            sunday: index === 0,
                            saturday: index === 6,
                        }"
                    >
                        {{ weekName }}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(row, rowIndex) in currentCalendarMatrix"
                    :key="rowIndex"
                    id="day-row"
                >
                    <td
                        v-for="(day, colIndex) in row"
                        :key="colIndex"
                        id="day-col"
                        :class="{
                            sunday: colIndex === 0,
                            saturday: colIndex === 6,
                        }"
                        @click="() => day !== 0 && selectDate(day)"
                    >
                        <div>
                            <span
                                v-if="isToday(currentYear, currentMonth, day)"
                                id="today"
                                >{{ day }}</span
                            >
                            <span v-else>{{ day }}</span>
                        </div>
                        <!-- 수입/지출 표시 -->
                        <div
                            v-if="
                                cashflowsByDate[
                                    `${currentYear}-${String(
                                        currentMonth
                                    ).padStart(2, '0')}-${String(day).padStart(
                                        2,
                                        '0'
                                    )}`
                                ]
                            "
                        >
                            <div id="day-income-text">
                                -
                                {{
                                    cashflowsByDate[
                                        `${currentYear}-${String(
                                            currentMonth
                                        ).padStart(2, "0")}-${String(
                                            day
                                        ).padStart(2, "0")}`
                                    ].expense.toLocaleString()
                                }}
                            </div>
                            <div id="day-expense-text">
                                +
                                {{
                                    cashflowsByDate[
                                        `${currentYear}-${String(
                                            currentMonth
                                        ).padStart(2, "0")}-${String(
                                            day
                                        ).padStart(2, "0")}`
                                    ].income.toLocaleString()
                                }}
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div>
        <div id="day-cash-inpormation">
            <div id="day-cash-report-text">일간 거래 내역</div>
            <div id="day-cash-report"></div>
        </div>

        <div id="day-cash-inpormation">
            <div id="day-cash-report-text">월 수입/지출 요약</div>
            <div id="month-cash-report">
                <div id="month-cash-total-income">
                    총 수입: {{ incomeTotal.toLocaleString() }}원
                </div>
                <div id="month-cash-total-expense">
                    총 지출: {{ expenseTotal.toLocaleString() }}원
                </div>
                <div id="month-cash-result">
                    순이익:
                    {{ (incomeTotal - expenseTotal).toLocaleString() }}원
                </div>
            </div>
        </div>
    </div>
</template>
