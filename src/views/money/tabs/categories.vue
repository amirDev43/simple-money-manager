<template>
    <div>
        <div class="my-3 bg-warning">
            <h3>Categories</h3>
        </div>
        <div class="my-3">
            <div class="row">
                <div class="col-6 col-md-6">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="table-dark">
                                <tr class="">
                                    <th>#</th>
                                    <th width="70%">Category</th>
                                    <th width="20%">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-6 col-md-6">
                    <div class="form-group mb-3">
                        <label for="" class="form-label">Category Name:</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="text-end">
                        <button class="btn btn-success btn-sm">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'tab-categories',
    data() {
        return {

        }
    }
}

</script>