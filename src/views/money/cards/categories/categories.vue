<template>
    <div class="row">
        <div class="col-md-8">
            <div class="card p-3">
                <div class="mb-5">
                    <h3>Categories</h3>
                </div>
                <div class="mb-3">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="text" class="form-control">
                                    </td>
                                    <td>
                                        <button class="btn btn-success btn-sm">Add</button>
                                    </td>
                                </tr>
                                <tr v-for="(category, index) in categoriesList" :key="index">
                                    <td>{{ (index) + 1 }}</td>
                                    <td>{{ category.name }}</td>
                                    <td>
                                        <button class="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'card-caegories',
    data() {
        return {
            categoriesList: [
                {
                    id: 1,
                    name: 'Food And Drinks',
                },
                {
                    id: 2,
                    name: 'Car',
                },
                {
                    id: 3,
                    name: 'House',
                },
                {
                    id: 4,
                    name: 'Others',
                },
            ]
        }
    }
}

</script>