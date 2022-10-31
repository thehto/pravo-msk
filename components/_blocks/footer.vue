<template>
	<footer class="footer">
		<div class="container">
			<base-scrolltop></base-scrolltop>
			<div class="row">
				<div class="col-xl-3 col-lg-3 col-md-6">
					<nuxt-link to="/" class="logo mb-4 active">
						<img src="/logo-white.png" alt="РоссЮрист">
					</nuxt-link>
					<p class="footer__info">
						<small>РоссЮрист</small>
					</p>
					<p class="footer__copy">
						<small>Все права защищены. © 2022</small>
					</p>
				</div>
				<div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
					<div class="footer__title mb-3 mt-4 mt-md-0">
						<base-icon name="solid/bars-staggered" type="font-awesome" class="icon" />
						<span>Меню</span>
					</div>
					<ul class="footer__menu">
						<!--<li>
							<a href="#/">Форум</a>
						</li>-->
						<li>
							<nuxt-link to="/#icons" data-pjax="content">Почему мы?</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/#help" data-pjax="content">Как мы помогаем</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/#faq" data-pjax="content">Вопросы и ответы</nuxt-link>
						</li>
					</ul>
				</div>
				<div class="col-xxl-3 offset-xxl-1 col-xl-3 col-lg-3 col-md-6">
					<div class="footer__title mb-3 mt-4 mt-lg-0">
						<base-icon name="solid/link" type="font-awesome" class="icon" />
						<span>Важные ссылки</span>
					</div>
					<ul class="footer__menu">
						<li>
							<a href="/docs/policy.pdf" target="_blank">Политика конфиденциальности</a>
						</li>
						<li>
							<a href="/docs/oferta.pdf" target="_blank">Пользовательское соглашение</a>
						</li>
					</ul>
				</div>
				<div class="col-xxl-2 col-xl-3 col-lg-3 col-md-6">
					<div class="footer__title mb-3 mt-4 mt-lg-0">
						<span></span>
					</div>
					<ul class="footer__socials">
						<li class="mb-4">
							<a href="tel:88007751419">
								<base-icon name="solid/phone" type="font-awesome" class="icon icon-phone" />
								<span style="font-size: 18px;">8 800 775 14 19</span>
							</a>
						</li>
						<li>
							<a href="https://api.whatsapp.com/send/?phone=79092748063" target="_blank">
								<base-icon name="brands/whatsapp" type="font-awesome" class="icon icon-whatsapp" />
								<span>WhatsApp</span>
							</a>
						</li>
						<li>
							<a href="https://t.me/lidgobot" target="_blank">
								<base-icon name="brands/telegram" type="font-awesome" class="icon icon-telegram" />
								<span>Telegram</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer {
	padding: 50px 0;
	background: linear-gradient(to top, rgb(13, 17, 23) 20%, rgb(38, 41, 53));
	background: #28292e;
	//background: #1d212c;
	//box-shadow: inset 0px 6px 12px 0px #000;
	border-top: 2px dashed #fff;
    .container {
        position: relative;
    }

	a {
		font-weight: 200;
	}
	.logo {
		display: block;
		max-width: 100%;
		img {
			width: 100%;
			height: auto;
		}
	}
	&__info {
		margin-bottom: 5px;
		small {
			color: #fff;
		}
	}
	&__copy {
		small {
			color: #9ca6b9;
		}
	}
	&__title {
		display: flex;
		font-size: 20px;
		font-weight: 700;
		//margin-top: 5px;
		color: #fff;
		font-family: $font-primary;
		.icon {
			margin-right: 15px;
			:deep(svg) {
				max-width: 22px;
				max-height: 22px;
				fill: $bg-primary;
			}
		}
	}
	&__menu {
		display: flex;
		flex-wrap: wrap;
		//flex-direction: column;
		li {
			margin: 5px 0;
			padding-right: 17px;
			a {
				color: #b8c1d4;
                font-size: $text-size-small;
			}
		}
	}
	&__socials {
		li {
			margin: 5px 0;
			a {
				display: flex;
				flex-direction: row;
				align-items: center;
				color: #b8c1d4;
				padding: 0px 0;
                font-size: $text-size-small;
				.icon {
					min-width: 20px;
					margin-right: 15px;
					:deep() svg {
						max-width: 20px;
						max-height: 20px;
						fill: $bg-primary;
					}
					&.icon-discord {
						:deep(svg) {
							fill: #5865f2;
						}
					}
					&.icon-youtube {
						:deep(svg) {
							fill: #ff0000;
						}
					}
					&.icon-telegram {
						:deep(svg) {
							fill: #0088cc;
						}
					}
					&.icon-whatsapp {
						:deep(svg) {
							fill: #25d366;
						}
					}
				}
			}
		}
	}
	a {
		color: #fff; //#919cb0;
		&:hover {
			color: #fff;
		}
	}
	.top {
		position: absolute;
		top: -62px;
		right: 15px;
	}
}
</style>