<template>
	<section class="main">
		<!--<div class="main__image">
            <img src="https://preview.cruip.com/switch/dist/images/header-illustration-dark.svg" alt="Header illustration"></img>
		</div>-->

		<base-modal ref="modal_main">
			<template v-slot:close>
				<div @click="closeModal">
					<base-icon name="thin/xmark" class="icon icon-close"></base-icon>
				</div>
			</template>
			<template v-slot:content>
				<div class="modal-content">
					<blocks-contact title="Получите ответ специалиста <br>прямо сейчас"></blocks-contact>
				</div>
			</template>
		</base-modal>

		<div class="container">
			<div class="row">
				<div class="col-12 col-xxl-7 col-xl-7 col-lg-6 col">
					<div class="block">
						<h1 class="mb-5">Решение вопросов, связанных с нарушением прав военнослужащих</h1>
						<h3 class="mb-5">
							Профессиональная помощь
							и юридическая консультация<br>
							военного адвоката в Москве
						</h3>
						<p class="mb-5">
							Проконсультируйтесь со специалистом «<b>РоссЮрист</b>»
						</p>
						<div class="buttons">
							<div class="btn btn-primary btn-big shine" @click="openModal">Связаться с нами</div>
							<div class="buttons-mobile">
								<a href="https://t.me/lidgobot" target="_blank" class="btn btn-big btn-icon telegram ml-4">
									<base-icon name="brands/telegram" class="icon" />
								</a>
								<a href="https://api.whatsapp.com/send/?phone=79092748063" target="_blank" class="btn btn-big btn-icon whatsapp">
									<base-icon name="brands/whatsapp" class="icon" />
								</a>
							</div>
						</div>
						<small class="mt-2 d-flex">* Бесплатная консультация</small>
					</div>
				</div>
				<div class="col-12 col-xxl-5 col-xl-5 col-lg-6 col">
					<div class="image">
						<img src="/images/main-people.webp" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	data: () => ({
		data: null,
	}),
	methods: {
		getInstance(art) {
			console.log(art);
		},
		async closeModal() {
			this.$refs.modal_main.close();
		},
		async openModal() {
			this.$refs.modal_main.open();
		},
	},
	computed: {
		getTheme() {
			return this.$store.state.theme.data;
		},
	},
};
</script>
<style lang="scss" scoped>
.main {
	width: 100%;
	//min-height: calc(100vh + 3px);
	//border-bottom: 2px dashed #fff;
	background-image: url(/images/bg.jpg);
	background-position: center center;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	flex-wrap: wrap;
	padding: 184px 0 100px 0;
	overflow: hidden;
	position: relative;
	border-bottom: 2px dashed #eee;
	h1 {
		font-size: $h2-size;
		font-weight: 900;
		//background: linear-gradient(45deg, #fa7e1e, #cb1576 30%, #7b1bc0 70%, #3957d5 100%);
		//-webkit-background-clip: text;
		//-webkit-text-fill-color: transparent;
	}
	h3 {
		font-size: 26px;
		//font-family: $font-default;
	}
	.image {
		display: inline-flex;
		position: absolute;
		bottom: 0;
		z-index: 1;
		&:before {
			display: none;
			flex: none;
			content: "";
			width: 100%;
			height: 100%;
			right: -33%;
			position: absolute;
			//border: 4px solid $bg-primary;
			box-shadow: inset 0px 0px 0px 30px rgba(255,255,255, 0.5);
			background-image: linear-gradient(45deg, rgba(0,0,0,0), $bg-primary);
			border-radius: 100% 100% 0 0;
			border-bottom: none;
			z-index: -1;
		}
		img {
			width: 100%;
			height: 100%;
		}
	}
	.col {
		position: inherit;
	}
	.buttons {
		display: flex;
		align-items: center;
	}
	.btn-icon {
		padding: 0 5px;
		:deep(svg) {
			max-width: 32px;
			max-height: 32px;
		}
		&.telegram {
			:deep(svg) {
				fill: #0088cc;
			}
		}
		&.whatsapp {
			:deep(svg) {
				fill: #25d366;
			}
		}
		&:hover {
			:deep(svg) {
				fill: $text-primary;
			}
		}
	}
}
.col {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}
.block {
	//padding-top: 100px;
	position: relative;
	z-index: 3;
}
@media screen and (max-width: 992px) {
	.main {
		h1 {
			font-size: 42px;
		}
		h3 {
			font-size: 32px;
		}
		:deep() .video {
			height: 75vw;
			padding-top: 50px;
		}
		&__image2 {
			opacity: 0.5;
		}
		.image {
			//height: 500px;
			//width: 100%;
			//display: none;
			opacity: 0.1;
			bottom: 0;
			right: 0;
			img {
				width: 100%;
				height: 100%;
				//object-fit: contain;
			}
		}
		.btn-big {
			//padding: 10px 20px;
		}
		.buttons {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			.btn-big {
				margin-bottom: 15px;
			}
			.btn-icon {
				margin-left: 0 !important;
				margin-right: 15px;
				display: inline-flex;
				padding: 0;
				:deep(svg) {
					margin: 0;
				}
			}
		}
	}
}

@media screen and (max-width: 576px) {
	.main {
		padding-top: 140px;
		h1 {
			font-size: 38px;
		}
		h3 {
			font-size: 26px;
		}
	}
}

@media screen and (max-width: 420px) {
	.main {
		padding-top: 140px;
		h1 {
			font-size: 32px;
		}
		h3 {
			font-size: 22px;
		}
	}
}
</style>