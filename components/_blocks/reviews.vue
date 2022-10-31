<template>
	<section class="reviews">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h3 class="reviews__title">Отзывы</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-xxl-12">
					<carousel class="reviews__slider" :autoplay="slider.autoplay" :autoHeight="slider.autoHeight" :responsive="slider.responsive">
						<template v-for="(item, i) in items">
							<div class="card" :key="i">
								<div class="card__content">
                                    <div class="card__head">
                                        <base-icon name="solid/message-quote" class="icon"></base-icon>
                                        <h4>{{item.title}}</h4>
                                    </div>
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
					title: "Ирина",
					desc: "Хорошие юристы, обращаемся всеми родственниками! Адвокат Николай Сергеевич всегда на связи, оперативно выезжает, куда нужно. Переехали в другой город, но попрежнему обращаемся в Закон, честных юристов найти сейчас непросто!<br>Желаем успехов, процветания и адекватных клиентов!",
				},
				{
					position: 2,
					title: "Анастасия М.",
					desc: "Огромное спасибо Писклёнову Николаю Сергеевичу, очень внимательно отнёсся К консультации, несмотря на то, что она бесплатная, все грамотно рассказал и доступно объяснил",
				},
				{
					position: 3,
					title: "Альбина В.",
					desc: "Я очень счастлива, что обратилась к Вам. Вы решили мой вопрос грамотно и лояльно. Всем советую данную организацию. Сейчас точно знаю, безвыходных ситуаций не бывает, нужно правильно и юридически грамотно подходить, а в этом данная организация поможет.",
				},
				{
					position: 4,
					title: "Антон Б.",
					desc: "Обратился в апреле этого года. Проконсультировался, собрал документы. Обещали завершить все за 6 месяце, а сделали за 3! Огромная благодарность всему коллективу Военного Юриста. Всегда вежливая обратная связь, на все вопросы отвечают по делу и своевременно. Сложностей никаких не испытал при прохождении процедуры.",
				},
				{
					position: 5,
					title: "Николай Ш.",
					desc: "Хочу выразить благодарность всей команде компании ВЮ за их работу. Поставленная задача выполнена качественно и оперативно.",
				},
				{
					position: 6,
					title: "Софья Д.",
					desc: "Здравствуйте! Обратилась с проблемой, которая требовала юридического вмешательства. Компания отреагировала адекватно и предложила наилучший вариант решения проблемы. Очень понравились сотрудники, быстро и по делу помогли мне. Спасибо!",
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
	background-color: #f9f9f9;
	padding: 80px 0 80px 0;

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
        background-color: #fff;
        padding: 30px;
        border-radius: 8px;
        &__head {
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            .icon {
                margin-right: 20px;
                :deep(svg) {
                    max-width: 20px;
                    max-height: 20px;
                    fill: $bg-primary;
                }
            }
			h4 {
				font-family: $font-default;
			}
        }
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
			//padding: 0 30px;

			width: 100%;
			height: 100%;

			font-weight: normal;
			line-height: 22px;
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