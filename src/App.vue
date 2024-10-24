<template>
<nav class="navbar bg-body-tertiary mb-0 py-0 bg-success text-center">
	<div class="text-center mt-0 w-100" style="background-color:#46344E">
		<p class="navbar-brand mb-0 text-light text-center">Amir Hafidz</p>
	</div>
</nav>
<div class="d-flex justify-content-between">
	<Sidebar />
	<main>
		<router-view></router-view>
	</main>
</div>

</template>

<script>
import Sidebar from '@/views/layouts/lySide.vue'

export default {
	name: 'App',
	components: {
		Sidebar
	}
}
</script>

<style scoped>

main {
	width: 80vw;
	margin: 10px;
}

</style>