<template>
    <div>
        <div class="container my-5 py-5">
            <div class="mb-3 d-flex justify-content-start align-items-center">
                <div style="cursor: pointer;" class="bg-success">
                    <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"/></svg>
                </div>
                <div class="bg-primary align-text-bottom">
                    <h3>Day Details</h3>
                </div>
            </div>
            <div class="mb-3">
                <div class="form-group">
                    <label for="" class="form-label">Date</label>
                    <p>29, Sept 2024</p>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Roti</td>
                            <td>Food/Drinks</td>
                            <td>RM 4.30</td>
                            <td><button class="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <td colspan="4">Total</td>
                        <td></td>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'day-details',
    data() {
        return {

        }
    }
}

</script>