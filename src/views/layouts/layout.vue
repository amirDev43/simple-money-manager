<template>
<div>
    <div class="container py-5 my-5">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="py-3">
                <h3>Money Management</h3>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Day
            </button>
        </div>
        <div class="mb-3">
            <table class="table">
                <thead>
                    <th>#</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th class="text-center">Actions</th>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="(day, index) in dayList" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td width="40%" class="text-primary">
                            <div style="cursor: pointer;">
                                {{ day.date }}
                            </div>
                        </td>
                        <td width="30%">RM {{ day.total }}</td>
                        <td width="15%">
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-sm btn-success me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasViewDate">View</button>
                                <button class="btn btn-sm btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <ModalAddDay />
    <DrawerView />
</div>
</template>

<script>
import ModalAddDay from '@/views/money/modals/add_day.vue'
import DrawerView from '@/views/money/drawers/view.vue'

export default {
    name: 'Layout-View',
    components: {
        ModalAddDay,
        DrawerView
    },  
    data() {
        return {
            dayList: [
                {
                    day_id: 1,
                    date: '2024-06-10',
                    total: '568',
                }
            ]
        }
    }
}

</script>