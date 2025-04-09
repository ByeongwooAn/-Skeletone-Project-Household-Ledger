import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import CashFlowView from "../views/CashFlowView.vue";
import CashCalenderView from "../views/CashCalenderView.vue";
import CashStatisticsView from "../views/CashStatisticsView.vue";
import CashReportView from "../views/CashReportView.vue";
import SettingView from "../views/SettingView.vue";

import MainViewMobile from "../views/MainViewMobile.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Main",
            component: MainView,
        },
        {
            path: "/cashflow",
            name: "cashflow",
            component: CashFlowView,
        },
        {
            path: "/cashmonth-calender",
            name: "cashmonth-calender",
            component: CashCalenderView,
        },
        {
            path: "/cashmonth-statistics",
            name: "cashmonth-statistics",
            component: CashStatisticsView,
        },
        {
            path: "/cashreport",
            name: "cashreport",
            component: CashReportView,
        },
        {
            path: "/setting",
            name: "setting",
            component: SettingView,
        },

        //모바일 Router

        {
            path: "/mobile/Main",
            name: "MobileMain",
            component: MainViewMobile,
        },
    ],
});

export default router;
