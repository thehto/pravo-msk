<template>
	<div>
		<blocks-header></blocks-header>
		<main>
			<base-breadcrumbs :items="items" :title="''"></base-breadcrumbs>
			<section class="error">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<h1 class="mb-4">{{error.statusCode}}</h1>
                            <p>{{error.message}}</p>
						</div>
					</div>
				</div>
			</section>
		</main>
		<blocks-footer id="help"></blocks-footer>
		<!-- v-bind:class="{ 'dark-mode2': getTheme.dark }"-->
	</div>
</template>
<script>
export default {
	layout: "clear",
	props: ["error"],
};
</script>
<style lang="scss" scoped>
.error {
	background-color: #fff;
	min-height: calc(100vh - 320px - 227px + 10px);
	padding: 50px 0;
	h1,
	p {
		color: $text-color-primary-i;
	}
}
</style>