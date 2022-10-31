<template>
	<div>
		<Nuxt />
		<!-- v-bind:class="{ 'dark-mode2': getTheme.dark }"-->
	</div>
</template>

<script>
export default {
	computed: {
		getTheme() {
			return this.$store.state.theme.data;
		},
	},
	created() {
		if (process.client) {
			document.getElementsByTagName("html")[0].classList.add("theme-red");
			document.getElementsByTagName("html")[0].classList.add("theme-light");
		}
	},
	/*data: () => ({
		active: false,
		themeMode: "dark",
		modes: ["dark", "light"],
		colors: [
			{ name: "blue", color: "" },
			{ name: "green", color: "" },
			{ name: "pink", color: "" },
			{ name: "orange", color: "" },
			{ name: "violet", color: "" },
			{ name: "red", color: "" },
			{ name: "lightblue", color: "" },
			{ name: "yellow", color: "" },
		],
	}),
	computed: {
		animation() {
			return {
				enter(element) {
					let height = element.clientHeight;
					return {
						height: [height, 0],
						opacity: [1, 0],
					};
				},
				leave: {
					height: 0,
					opacity: 0,
					padding: "30px",
				},
			};
		},
		getTheme() {
			return this.$store.state.settings.theme;
		},
	},
	watch: {
		"$store.state.settings.theme.mode": function () {
			for (let i = 0; i < this.modes.length; i++) {
				document
					.getElementsByTagName("html")[0]
					.classList.remove("theme-" + this.modes[i]);
			}
			document
				.getElementsByTagName("html")[0]
				.classList.add("theme-" + this.getTheme.mode);
		},
		"$store.state.settings.theme.color": function () {
			for (let i = 0; i < this.colors.length; i++) {
				document
					.getElementsByTagName("html")[0]
					.classList.remove("theme-" + this.colors[i].name);
			}
			document
				.getElementsByTagName("html")[0]
				.classList.add("theme-" + this.getTheme.color);
		},
		"$store.state.settings.theme.scale": function () {
			document
				.getElementsByTagName("html")[0]
				.classList.remove("theme-scale");
			if (this.getTheme.scale) {
				document
					.getElementsByTagName("html")[0]
					.classList.add("theme-scale");
			}
		},
	},
	mounted() {
		document.getElementsByTagName("html")[0].classList.add("theme-dark");
		document.getElementsByTagName("html")[0].classList.add("theme-blue");
	},
	created() {
		if (this.$route.query.cef) {
			mp.events.add("redirect", (data = null) => {
				let res = JSON.parse(data);
				this.$router.push(res.url);
			});
            mp.events.add("notify", (data) => {
                let notify = JSON.parse(data);
                this.$notify({
                    group: "notify",
                    title: "",
                    text: notify.message,
                    type: notify.type,
                    duration: notify.delay,
                    speed: 200,
                });
            });
		}
	},*/
	async fetch() {
		//this.$store.commit("settings/setLoading", true);
		await this.$store.dispatch("theme/getTheme", "seenve"); //this.$route.query.socialclub);
		//this.$store.commit("settings/setLoading", false);
	},
	fetchOnServer: false,
};
</script>
<style lang="scss" scoped>
</style>