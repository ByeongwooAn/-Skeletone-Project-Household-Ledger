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
    <div class="calender">
        <h2>
            <a href="#" @click.prevent="onClickPrev">◀</a>
            {{ currentYear }}년 {{ currentMonth }}월
            <a href="#" @click.prevent="onClickNext">▶</a>
        </h2>
        <table class="table table-hover">
            <thead>
                <tr>
                    <td v-for="(weekName, index) in weekNames" :key="index">
                        {{ weekName }}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(row, rowIndex) in currentCalendarMatrix"
                    :key="rowIndex"
                >
                    <td
                        v-for="(day, colIndex) in row"
                        :key="colIndex"
                        style="padding: 20px"
                    >
                        <span
                            v-if="isToday(currentYear, currentMonth, day)"
                            class="rounded"
                            >{{ day }}</span
                        >
                        <span v-else>{{ day }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
