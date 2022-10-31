<template>
    <section class="help">

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
                <div class="col-12">
                    <div class="help__place">
                        <h3 class="mb-4 text-center">Как мы можем помочь?</h3>
                        <p>Компания «<b>РосссЮрист</b>» работает в сфере правовой защиты призывников уже более 10 лет. Наши специалисты ответят на любые вопросы, связанные с призывом в армию. Поможем найти выход из любой ситуации. Если у Вас проблема с получением выплат, есть убеждения противоречащие участию в мобилизации, противопоказания по здоровью – переживать не стоит. Вам поможет «РоссЮрист».</p>
                        <div class="buttons mt-5">
                            <div class="btn btn-primary btn-big shine" @click="openModal">
                                Нужна помощь
                            </div>
                        </div>
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
		async closeModal() {
			this.$refs.modal_main.close();
		},
		async openModal() {
			this.$refs.modal_main.open();
		},
	},
};
</script>
<style lang="scss" scoped>
.help {
    padding: 0px 0;
    padding-bottom: 80px;
    &__place {
        background-color: #eee;
        background-image: url(/images/help-bg.jpg);
        background-position: center center;
        background-size: cover;
        padding: 80px 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
        p {
            //max-width: 80%;
            text-align: center;
            line-height: 1.5rem;
        }
    }
}
@media screen and (max-width: 992px) {
    .help {
        padding-bottom: 30px;
        &__place {
            padding: 30px;
        }
    }
}
</style>