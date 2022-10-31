<template>
	<section class="komu">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h3 class="title">Кому мы помогаем?</h3>
				</div>
			</div>
			<div class="row row-flex">
				<div class="col-12 col-md-6">
					<div class="card card-left">
						<div class="card__head">
							<div class="card__icon">
								<base-icon name="solid/person-military-rifle" class="icon"></base-icon>
							</div>
							<div class="card__title">
								<h4>Военнослужащим -контрактным и мобилизованным участникам СВО</h4>
							</div>
						</div>
						<div class="card__content">
							<p>Законодательством России предусмотрены выплаты для получивших ранение (контузию, травму, увечье) в Сирии, Донбассе и Украине. Они предназначены военнослужащим, а в Донбассе и Украине — также служащим войск Нацгвардии со специальным званием полиции.</p>
							<p>Согласно Указу Президента РФ от 5 марта 2022 г. № 98 «О дополнительных социальных гарантиях военнослужащим, лицам, проходящим службу в войсках национальной гвардии Российской Федерации, и членам их семей», при любом ранении положена выплата, однако, на деле многим военнослужащим отказывают.</p>
						</div>
						<div class="buttons mt-4">
							<nuxt-link to="/#secure" class="btn btn-middle btn-default">Защита интересов</nuxt-link>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="card card-right">
						<div class="card__head">
							<div class="card__icon">
								<base-icon name="solid/person-military-to-person" class="icon"></base-icon>
							</div>
							<div class="card__title">
								<h4>Тем, кто хочет безопасно и на законных основаниях освободиться от мобилизации</h4>
							</div>
						</div>
						<div class="card__content">
							<p>Мы объясняем, что в стране объявлена пока не полная, а частичная мобилизация. Это значит, что при частичной мобилизации призывают людей по определенным военным специальностям. Если вы не служили в армии, вам не нужно переживать по поводу мобилизации.</p>
							<p>Но если в стране объявлена частичная мобилизация, никто не знает, сколько человек призовут. Даже если вы получили повестку, не факт, что именно вас заберут в армию. Дело в том, что еще нужно пройти комиссию, медосмотр, а также много других нюансов, о которых мало кто интересуется.</p>
						</div>
						<div class="buttons">
							<nuxt-link to="/#faq" class="btn btn-middle btn-default">Вопросы / ответы</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
.komu {
	background-color: #f9f9f9;
	padding: 80px;
	padding-top: 50px;

	.title {
		width: 100%;
		text-align: center;
		margin-bottom: 80px;
	}

	.card {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		flex-grow: 1;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		&__head {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			flex: none;
			//max-height: 50px;
		}
		&__icon {
			flex: none;
			border-right: 4px solid $bg-primary;
			padding-right: 30px;
			.icon {
				:deep(svg) {
					max-width: 50px;
					max-height: 50px;
					fill: $text-secondary;
					opacity: 0.5;
				}
			}
		}
		&__title {
			padding-left: 30px;
		}
		&__content {
			//height: 100%;
			padding-top: 40px;
			width: 100%;
			flex: none;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			p {
				margin-top: 15px;
				&:first-child {
					margin-top: 0;
				}
			}
		}
		.buttons {
			width: 100%;
			padding-top: 20px;
			margin-top: auto;
			/*display: flex;
			justify-content: center;
			align-items: center;*/
		}
		&.card-right {
			padding-left: 30px;
		}
		&.card-left {
			padding-right: 30px;
		}
	}
}
@media screen and (max-width: 992px) {
	.komu {
		padding: 30px 0;
		.title {
			margin-bottom: 0;
		}
		.card {
			margin-top: 40px;
			padding: 0 !important;
			&__head {
				flex-direction: column;
			}
			&__icon {
				flex: none;
				border-right: 0px solid $bg-primary;
				border-bottom: 2px solid $bg-primary;
				padding-bottom: 15px;
				padding-right: 0;
				.icon {
					:deep(svg) {
						max-width: 40px;
						max-height: 40px;
					}
				}
			}
			&__title {
				padding: 0;
				padding-top: 15px;
				text-align: center;
			}
		}
		.buttons {
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
}
</style>