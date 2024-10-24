<template>
    <div class="card p-3">
        <div class="mb-5">
            <h3>Expenses List</h3>
        </div>
        <div class="mb-3">
            <div class="row">
                <div class="form-group col-md-3">
                    <label for="" class="form-label">Search</label>
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <div class="form-group col-md-3">
                    <label for="" class="form-label">Date</label>
                    <input type="date" class="form-control" placeholder="Search">
                </div>
            </div>
            <div class="row my-3">
                <label for="" class="form-label">
                    Filter by Categories
                </label>
                <div class="d-flex justify-content-start">
                    <button class="btn btn-primary me-3">All</button>
                    <button class="btn btn-outline-secondary me-3">Food And Drinks</button>
                    <button class="btn btn-outline-info me-3">Car</button>
                    <button class="btn btn-outline-danger me-3">House</button>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th width="30%">Name</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(expense, index) in expensesList" :key="index">
                            <td>{{ (index) + 1 }}</td>
                            <td>{{ expense.name }}</td>
                            <td>{{ expense.category }}</td>
                            <td>{{ expense.amount }}</td>
                            <td>{{ expense.date }}</td>
                            <td>
                                <button class="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'card-caegories',
    data() {
        return {
            expensesList: [
                {
                    id: 1,
                    name: 'KFC',
                    category: 'Food And Drinks',
                    amount: 'RM 16.70',
                    date: '19 Sept, 2024'
                },
            ]
        }
    }
}

</script>