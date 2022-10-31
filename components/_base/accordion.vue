<template>
	<div class="accordion">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {},
	data() {
		return {
			Accordion: {
				count: 0,
				active: null,
			},
		};
	},
	provide() {
		return { Accordion: this.Accordion };
	},
};
</script>

<style lang="scss" scoped>
.accordion {
	display: flex;
	flex-direction: column;
	box-shadow: 0 12px 15px 0 rgba(145, 156, 176, 0.1);
	margin-bottom: 30px;
    background-color: #fff;
	/*&__item {
		margin-top: 0px;
		&:first-child {
			margin-top: 0;
		}
	}*/
}
</style>
