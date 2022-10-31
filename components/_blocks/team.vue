<template>
	<section class="reviews">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h3 class="reviews__title">Наши специалисты</h3>
				</div>
			</div>
			<!--<div class="row">
                <div class="col-xxl-6 col-xl-7 col-lg-8">
                    <div class="title calc__title">
                        <div class="title__rectangle"></div>
                        <div class="title__text">
                            <h2>{{getData.stepsTitle}}</h2>
                        </div>
                    </div>
                </div>
                <div class="offset-xxl-3 offset-xl-1 col-xxl-3 col-xl-4 col-lg-4 d-none d-lg-block">
                    <div class="d-flex justify-end">
                        <base-btn color="tr-blue" class="calc__btn" size="full" @click="openModal">{{getData.stepsButton}}</base-btn>
                        <base-modal v-show="showModal" @close="closeModal">
                            <form-backcall @close="closeModal" :modal="true"></form-backcall>
                        </base-modal>
                    </div>
                </div>
			</div>-->
			<div class="row">
				<div class="col-xxl-12">
					<carousel class="reviews__slider" :autoplay="slider.autoplay" :autoHeight="slider.autoHeight" :responsive="slider.responsive">
						<template v-for="(item, i) in items">
							<div class="card" :key="i">
								<div class="card__img" :style="`background-image: url(/images/team/${item.position}.webp)`"></div>
								<div class="card__content">
									<h4>{{item.title}}</h4>
									<p v-html="item.desc"></p>
								</div>
							</div>
						</template>
						<!--<template slot="prev">
                            <span class="prev">prev</span>
                        </template>
                        <template slot="next">
                            <span class="next">next</span>
						</template>-->
					</carousel>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import carousel from "vue-owl-carousel";

export default {
	components: { carousel },
	data() {
		return {
			showModal: false,
			slider: {
				autoplay: false,
				autoHeight: true,
				responsive: {
					0: {
						items: 1,
						nav: false,
						dots: true,
						margin: 15,
					},
					768: {
						items: 2,
						nav: false,
						dots: true,
						margin: 15,
					},
					992: {
						items: 2,
						nav: false,
						dots: true,
						margin: 15,
					},
					1200: {
						items: 3,
						nav: false,
						dots: true,
						margin: 15,
					},
					1400: {
						items: 3,
						nav: false,
						dots: true,
						margin: 30,
					},
					/*
                    $screen-xs: 360px;
                    $screen-sm: 576px;
                    $screen-md: 768px;
                    $screen-lg: 992px;
                    $screen-xl: 1200px;
                    $screen-xxl: 1400px;*/
				},
			},
			items: [
				{
					position: 1,
					title: "Коконов Евгений Сергеевич",
					desc: "Специалист военного и гражданского права",
				},
				{
					position: 2,
					title: "Марышева Жанна Алексеевна",
					desc: "Специалист военного права и гражданский представитель",
				},
				{
					position: 3,
					title: "Науменко Денис Валерьевич",
					desc: "Специалист военного и уголовного права",
				},
				{
					position: 4,
					title: "Максимов Алексей Олегович",
					desc: "Специалист военного и административного права",
				},
				{
					position: 5,
					title: "Навоян Гарегин Артурович",
					desc: "Специалист военного и медицинского права",
				},
				{
					position: 6,
					title: "Наумова Екатерина Вячеславовна",
					desc: "Специалист военного права",
				},
			],
		};
	},
};
</script>
<style lang="scss" scoped>
.reviews {
	width: 100%;
	overflow: hidden;
	background-color: #fff;
	padding: 80px 0 60px 0;

	&__title {
		margin-bottom: 60px;
	}
	&__slider {
		:deep(.owl-theme) {
			.owl-stage {
				display: flex;
				flex-wrap: wrap;
			}
			.owl-item {
				display: inline-flex;
			}
			.owl-dots {
				margin-top: 60px;
				.owl-dot {
					span {
						width: 45px;
						height: 4px;
						margin: 5px 7px;
						background: $bg-primary;
						opacity: 0.2;
						border-radius: 10px;
					}
					&.active {
						span {
							opacity: 1;
						}
					}
				}
			}
		}
	}
	.card {
		display: flex;
		flex-direction: row;
		overflow: hidden;
		//box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);

		&__img {
			width: 100px;
			//height: 100px;
			flex: none;
			//background-image: url(/images/main/garant/garant-1.jpg);
			background-color: #bbb;
			background-size: cover;
			background-position: center center;
			//border-radius: 100%;
			overflow: hidden;
			display: flex;
			flex-wrap: wrap;
			align-items: flex-end;
			justify-content: center;
			position: relative;
		}
		&__content {
			//margin-top: 25px;
			display: flex;
			//flex-wrap: wrap;
			flex-direction: column;
			align-items: flex-start;
			padding: 0 30px;

			width: 100%;
			height: 100%;

			font-weight: normal;
			line-height: 22px;
			h4 {
				margin-bottom: 15px;
				font-family: $font-default;
			}
		}
	}
}
@media screen and (max-width: 480px) {
	.reviews {
		padding: 30px 0px 20px 0px;
		&__title {
			margin-bottom: 30px;
		}
		&__slider {
			:deep(.owl-theme) {
				.owl-dots {
					margin-top: 30px;
					.owl-dot {
						span {
							width: 20px;
						}
					}
				}
			}
		}
	}
}
</style>