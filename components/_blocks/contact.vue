<template>
    <div class="form" v-if="!sended">
        <h4 class="mb-4" v-html="title"></h4>
        <div class="form-group mb-4">
            <label class="mb-2 d-flex"><small>Введите свое имя</small></label>
            <base-input placeholder="" v-model="form.name"></base-input>
        </div>
        <div class="form-group">
            <label class="mb-2 d-flex"><small>Введите свой телефон</small></label>
            <base-input placeholder="+7 (___) ___-__-__" v-model="form.phone"></base-input>
        </div>
        <div class="buttons mt-4">
            <div class="btn btn-default loading" @click="formSend">Отправить</div>
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
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default:() => ""
        }
    },
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