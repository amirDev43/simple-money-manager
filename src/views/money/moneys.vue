<template>
    <div>
        <main>
            <div class="box-one">
                <div class="container p-5">
                    <ul class="nav nav-underline">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="categories-tab" data-bs-toggle="tab" data-bs-target="#categories" type="button" role="tab" aria-controls="categories" aria-selected="true">Categories</button>
                        </li>
                    </ul>
    
                    <div class="tab-content">
                        <div class="tab-pane active" id="home" role="tabpanel">
                            <div class="card my-3 p-3">
                                <TabExpenses />
                            </div>
                        </div>
                        <div class="tab-pane" id="categories" role="tabpanel">
                            <div class="card my-3 p-3">
                                <TabCategories />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import TabExpenses from '@/views/money/tabs/expenses.vue'
import TabCategories from '@/views/money/tabs/categories.vue'

export default {
    name: 'money-listing',
    components: {
        TabExpenses,
        TabCategories
    }
}

</script>