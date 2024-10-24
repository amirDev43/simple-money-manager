<template>
    <div class="sidebar">
        <div class="py-5 w-100">
            <div class="bg-fifth w-100 text-center py-2 mb-5">
                <h4 style="font-weight: 800;">Money Manager</h4>

            </div>
            <div class="w-100 text-center py-2 sidebar-link mb-1" style="cursor: pointer;">
                <router-link :to="'/'">
                    <p :class="{'sidebar-active': isActive('/')}">Dashboard</p>
                </router-link>
            </div>
            <div class="w-100 text-center py-2 sidebar-link mb-1" style="cursor: pointer;">
                <router-link :to="'/expense-list'">
                    <p :class="{'sidebar-active': isActive('/expense-list')}">Expense List</p>
                </router-link>
            </div>
            <div class="w-100 text-center py-2 sidebar-link mb-1" style="cursor: pointer;">
                <router-link :to="'/categories'">
                    <p :class="{'sidebar-active': isActive('/categories')}">Categories</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    methods: {
        isActive(path) {
            return path === this.$route.path
        }
    }
}

</script>

<style scoped>

.sidebar-active {
    color: #fff !important;
}

.kk {
    background-color: blueviolet;
}

</style>