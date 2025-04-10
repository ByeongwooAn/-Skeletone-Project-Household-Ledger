<script setup>
import { ref, onMounted } from "vue";
import { useCalendar } from "@/function/calender.js";
import "../../css/calender.css";

const cashflowsByDate = ref({});

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

onMounted(async () => {
    init();

    const res = await fetch("/db.json");
    const data = await res.json();

    const grouped = {};

    data.cashflows.forEach((item) => {
        const date = item.date;
        if (!grouped[date]) {
            grouped[date] = { income: 0, expense: 0 };
        }
        grouped[date][item.type] += item.amount;
    });

    cashflowsByDate.value = grouped;
});
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
                            <div style="color: red">
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
                            <div style="color: blue">
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
</template>
