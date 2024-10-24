// import Layout from '@/views/layouts/layout.vue'
import DayDetails from '@/views/money/details/details.vue'
import MoneyListing from '@/views/money/money.vue'
import ExpenseListing from '@/views/money/cards/list/expenseList.vue'
import Categories from '@/views/money/cards/categories/categories.vue'
import Dashboard from '@/views/money/cards/add/addExpenses.vue'

export const allRouter = [
    {
        path: '/',
        component: Dashboard,
    },
    {
        path: '/day-details/:dayId',
        component: DayDetails,
    },
    {
        path: '/money',
        component: MoneyListing,
    },
    {
        path: '/categories',
        component: Categories,
    },
    {
        path: '/expense-list',
        component: ExpenseListing,
    },
]