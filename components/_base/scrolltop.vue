<template>
	<a href="#main" class="top">
		<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7.99662 3.15864L13.9824 9.1442C14.1469 9.30901 14.3667 9.39968 14.6011 9.39968C14.8356 9.39968 15.0553 9.30901 15.22 9.1442L15.7443 8.61971C15.9092 8.45516 16 8.23519 16 8.00078C16 7.76638 15.9092 7.54667 15.7443 7.38199L8.61763 0.255223C8.45242 0.0898896 8.23168 -0.000646921 7.99701 3.48505e-06C7.7613 -0.000646921 7.54081 0.0897596 7.37548 0.255223L0.255741 7.37535C0.0907974 7.54004 9.53674e-07 7.75974 9.53674e-07 7.99428C9.53674e-07 8.22869 0.0907974 8.44839 0.255741 8.61321L0.779968 9.13756C1.12117 9.47877 1.67662 9.47877 2.01769 9.13756L7.99662 3.15864Z"
				fill="white"
			/>
		</svg>
	</a>
</template>
<script>
export default {
	//scrollToTop: true,
};
</script>
<style lang="scss" scoped>
.top {
	flex: none;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 64px;
	height: 24px;
	border-radius: 5px;
	background-color: $bg-primary;
	transition: 0.1s;
	cursor: pointer;
	&:hover {
		//background-color: #000;
        transform: translateY(-1px);
	}
}
</style>