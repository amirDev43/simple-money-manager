<template>
    <div>
        <main>
            <div class="d-flex justify-content-between mb-3">
                <h5>Amir Hafidz</h5>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <AddExpenses />
                </div>
                <div class="col-md-6 mb-3">
                    <Categories />
                </div>
                <div class="col-md-12 mb-3">
                    <ExpenseList />
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import AddExpenses from '@/views/money/cards/add/addExpenses.vue';
import Categories from '@/views/money/cards/categories/categories.vue';
import ExpenseList from '@/views/money/cards/list/expenseList.vue'

export default {
    name: 'money-listing',
    components: {
        AddExpenses,
        Categories,
        ExpenseList
    }
}

</script>