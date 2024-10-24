<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasViewDate" aria-labelledby="offcanvasViewDateLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasViewDateLabel">Data</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="mb-3">
                <p>Date: 9, Sept 2024</p>
                <p>Total Expense: 9, Sept 2024</p>
            </div>
            <div class="mb-3">
                <div class="table-responsive">
                    <table class="table">

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Drawer-View',
    data() {
        return {

        }
    }
}

</script>
