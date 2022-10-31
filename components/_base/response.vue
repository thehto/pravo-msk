<template>
    <div class="response">
        <transition name="fadeHeight">
            <div class="response__error" v-show="show">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: () => "error",
        },
        show: {
            type: Boolean,
            default: () => false,
        },
    },
    computed: {},
    /*watch: {
        show: function (newVal, oldVal) {
            if (newVal == true) {
                this.show = true;
                this.showAlert();
            }
        },
    },
    watch: {
        $props: {
            handler() {
                this.parseData();
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        async showAlert() {
            await setTimeout(()=> {
                this.show = false;
            }, 3000);
        },
    },*/
};
</script>
<style lang="scss" scoped>
.fadeHeight-enter-active,
.fadeHeight-leave-active {
    transition: all 0.2s;
    max-height: 230px;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
    opacity: 0;
    max-height: 0px;
}

.response {
    width: 100%;
    display: flex;
    min-height: 1px;
    content: "";
    &__error {
        width: 100%;
        display: flex;
        //@at-rootbackground-color: rgba(255, 50, 50, 0.8);
        background-color: rgb(204, 34, 34);
        padding: 10px 10px;
        border-radius: 3px;
        color: #fff;
        font-size: $text-small-size;
        margin: 10px 0;
        line-height: 18px;
        overflow: hidden;
    }
}
</style>