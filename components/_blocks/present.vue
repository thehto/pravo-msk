<template>
	<section class="present">
		<div class="container">
			<!--<div class="row">
				<div class="col-12">
					<h3 class="mb-5 title">Что мы предлагаем?</h3>
				</div>
			</div>-->
			<div class="row-flex">
				<div class="col-12 col-md-9">
                    <h3 class="mb-5 title">Что мы предлагаем?</h3>
					<div class="present-list">
						<div class="item">
							<div class="item__icon">
								<base-icon name="regular/check"></base-icon>
							</div>
							<div class="item__content">
								<p>Вы сохраните свое здоровье и нервную систему.</p>
							</div>
						</div>
						<div class="item">
							<div class="item__icon">
								<base-icon name="regular/check"></base-icon>
							</div>
							<div class="item__content">
								<p>Родители, друзья и родственники не будут переживать.</p>
							</div>
						</div>
						<div class="item">
							<div class="item__icon">
								<base-icon name="regular/check"></base-icon>
							</div>
							<div class="item__content">
								<p>Содействие в получении полагающихся по закону выплат.</p>
							</div>
						</div>
						<div class="item">
							<div class="item__icon">
								<base-icon name="regular/check"></base-icon>
							</div>
							<div class="item__content">
								<p>Оказываем поддержку в срочных и экстренных ситуациях.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-3">
					<div class="form" v-if="!sended">
                        <h5 class="mb-3">Получите ответ специалиста прямо сейчас</h5>
                        <div class="form-group mb-2">
                            <label class="mb-2 d-flex"><small>Введите свое имя</small></label>
							<base-input v-model="form.name" placeholder=""></base-input>
						</div>
						<div class="form-group">
                            <label class="mb-2 d-flex"><small>Введите свой телефон</small></label>
							<base-input v-model="form.phone" placeholder="+7 (___) ___-__-__"></base-input>
						</div>
						<div class="buttons mt-3">
							<div class="btn btn-default" @click="formSend">Отправить</div>
							<a href="https://t.me/lidgobot" target="_blank" class="btn btn-icon telegram ml-2">
								<base-icon name="brands/telegram" class="icon" />
							</a>
							<a href="https://api.whatsapp.com/send/?phone=79092748063" target="_blank" class="btn btn-icon whatsapp">
								<base-icon name="brands/whatsapp" class="icon" />
							</a>
						</div>
						<br />
						<small>* Отправляя форму вы даете согласие на обработку моих данных.</small>
					</div>
					<div class="result-form" v-else>
						<div class="result-info">
							<div class="icon-success">
								<base-icon name="light/check" class="icon"></base-icon>
							</div>
							<h4>Запрос принят.</h4>
						</div>
						<p>Ожидайте звонка специалиста в ближайшее время.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			sended: false,
			form: {
                name: "",
				phone: "",
			},
		};
	},
	methods: {
        async formSend() {
            try {
                if(this.form.phone.length < 10) return 
                let formData = new FormData();
                formData.append('name', this.form.name);
                formData.append('phone', this.form.phone);
                let response = await this.$axios.$post(
                    `/form.php`,
                    formData,
                );
                console.log(response)
                if(response.result) {
                    this.sended = true;
                }
            } catch (e) {
                console.log(e)
            }
        },
	}
};
</script>
<style lang="scss" scoped>
.present {
	background-color: #fff;
	padding: 80px 0;
	//margin-bottom: 80px;
	.form {
		width: 100%;
		border-radius: $border-radius-small;
		background-color: #f9f9f9;
		background-image: linear-gradient(20deg, #eee, #fff);
		border: 1px solid #eee;
		padding: 20px 30px;
		:deep() {
			.input {
				.input__value {
					background-color: #fff;
				}
			}
		}
        h5 {
            font-size: $text-size;
        }
	}
	.title {
		display: inline-flex;
		font-weight: 800;
		background: linear-gradient(45deg, $bg-primary, $text-primary);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		//font-size: $h2-size;
	}
	.image {
		width: 100%;
		height: 100%;
		display: flex;
		border-radius: $border-radius-small;
		overflow: hidden;
		img {
			width: auto;
			height: auto;
			max-width: 100%;
			max-height: 100%;
			object-fit: cover;
		}
	}
	.present-list {
		width: 100%;
		display: flex;
		flex-direction: column;
		.item {
			display: flex;
			flex-direction: row;
			margin-top: 20px;
			&:first-child {
				margin-top: 0;
			}
			/*&:nth-child(2) {
                margin-left: 10px;
            }
            &:nth-child(3) {
                margin-left: 20px;
            }
            &:nth-child(4) {
                margin-left: 30px;
            }*/
			&__icon {
				flex: none;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 42px;
				height: 42px;
				background-color: $bg-primary;
				border-radius: $border-radius-middle;
				:deep(svg) {
					margin-top: 3px;
					fill: $text-color-btn;
					width: 100%;
					height: 100%;
					max-width: 20px;
					max-height: 20px;
				}
			}
			&__content {
				padding-left: 30px;
				padding-top: 10px;
				p {
					font-size: $text-size-big;
					font-weight: 700;
					line-height: 1.2rem;
				}
			}
		}
	}
    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
	.btn-icon {
		padding: 0 0px;
		:deep(svg) {
			max-width: 28px;
			max-height: 28px;
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
@media screen and (max-width: 992px) {
	.present {
		padding: 30px 0;
		margin-bottom: 30px;
		.present-list {
			.item {
				&__content {
					padding-left: 20px;
					padding-top: 0px;
					p {
						font-size: 15px;
					}
				}
			}
			margin-bottom: 30px;
		}
	}
}


.icon-success {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $bg-primary;
    border-radius: 6px;
    margin-right: 15px;
    .icon {
            max-width: 16px;
            max-height: 16px;
        :deep(svg) {
            fill: #fff;
            max-width: 16px;
            max-height: 16px;
        }
    }
}
.result-info {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
}
</style>