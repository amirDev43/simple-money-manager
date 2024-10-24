<template>
    <div class="row">
        <div class="col-md-8">
            <div class="card p-3">
                {{ currTime }}
                <div class="mb-5">
                    <h3>Add Expense</h3>
                </div>
                <form action="">
                    <div class="form-group mb-3">
                        <label for="" class="form-label">Title</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="row">
                        <div class="form-group mb-3 col-6">
                            <label for="" class="form-label">Categories</label>
                            <select class="form-select">
                                <option value="">All</option>
                                <option value="">Food And Drinks</option>
                            </select>
                        </div>
                        <div class="form-group mb-3 col-6">
                            <label for="" class="form-label">Amount</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group mb-3 col-6">
                            <label for="" class="form-label">Date Issued</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="form-group mb-3 col-6">
                            <label for="" class="form-label">Time</label>
                            <input type="date" class="form-control">
                        </div>
                        <div class="form-group mb-3 col-12">
                            <label for="" class="form-label">Remark</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="text-end">
                        <button class="btn btn-danger me-3">Reset</button>
                        <button class="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                title: '',
                categories: ''
            },
            currTime: this.getCurrentTime()
        }
    },

    methods: {
        getCurrentTime() {
            const now = new Date();
            return now.toLocaleTimeString();
        },
        updateTime() {
            this.currTime = this.getCurrentTime()
        }
    },
    mounted() {
        this.timer = setInterval(this.updateTime, 1000)
    },
    beforeUnmount() {
        clearInterval(this.timer)
    },

}

</script>