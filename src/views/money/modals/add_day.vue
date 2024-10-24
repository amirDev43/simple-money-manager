<template>
    <div>
        <div class="modal modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Day</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <div class="col-3">
                                <div class="form-group">
                                    <label for="" class="form-label">Date</label>
                                    <input type="date" class="form-control" v-model="form.date">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            {{ expenseForm }}
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th width="40%">Title</th>
                                            <th width="30%">Category</th>
                                            <th width="20%">Amount</th>
                                            <th width="5%">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#</td>
                                            <td>
                                                <input type="text" class="form-control" v-model="expenseForm.title">
                                            </td>
                                            <td>
                                                <select class="form-select" v-model="expenseForm.category">
                                                    <option value="">Select</option>
                                                    <option value="realiti">realiti</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" class="form-control" v-model="expenseForm.amount">
                                            </td>
                                            <td class="text-center">
                                                <button class="btn btn-success btn-sm" @click="addRow" :disabled="(!expenseForm.title || !expenseForm.category || !expenseForm.amount)">Add</button>
                                            </td>
                                        </tr>
                                        <tr v-for="(expense, index) in form.expenses" :key="index">
                                            <td>{{ index + 1 }}</td>
                                            <td>
                                                <input type="text" class="form-control" v-model="form.expenses[index].title">
                                            </td>
                                            <td>
                                                <select class="form-select" v-model="form.expenses[index].category">
                                                    <option value="">realiti</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" class="form-control" v-model="form.expenses[index].amount">
                                            </td>
                                            <td>
                                                <button class="btn btn-danger btn-sm" @click="removeRow(index)">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot class="bg-warning">
                                        <tr class="bg-info">
                                            <td colspan="5">TOTAL</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                date: '',
                expenses: [],
            },
            expenseForm: 
                {
                    title: '',
                    category: '',
                    amount: ''
                }
            
        }
    },
    methods: {
        addRow() {
            this.form.expenses.push({
                title: this.expenseForm.title,
                category: this.expenseForm.category,
                amount: this.expenseForm.amount,
            })
            Object.keys(this.expenseForm).forEach(obj => {
                this.expenseForm[obj] = ''
            })
        },
        removeRow(index) {
            this.form.expenses.splice(index, 1)
        }
    }
}

</script>