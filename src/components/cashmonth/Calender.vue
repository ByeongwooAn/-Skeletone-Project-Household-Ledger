<script setup>
import { onMounted } from "vue";
import { useCalendar } from "@/function/calender.js";
import "../../css/calender.css";

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

onMounted(() => {
    init();
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
                        <span
                            v-if="isToday(currentYear, currentMonth, day)"
                            id="today"
                            >{{ day }}</span
                        >
                        <span v-else>{{ day }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
