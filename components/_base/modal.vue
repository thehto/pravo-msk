<template>
    <transition name="modal">
        <div class="modal" v-if="show">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal__close">
                        <slot name="close"></slot>
                    </div>
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        /*show: {
            type: Boolean,
            default: () => false,
        },*/
    },
    data: () => ({
        show: false,
    }),
    methods: {
        async open() {
            this.show = true;
        },
        async close() {
            this.show = false;
        }
    },
    computed: {
        overlay() {
            return this.$store.state.app.body.overlay || false;
        },
    },
};
</script>
<style lang="scss" scoped>
//old
.modal {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: block;
    overflow-y: auto;
    transition: opacity 0.3s ease;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(var(--line-color), 0.8);
    opacity: 1;
    //backdrop-filter: blur(5px);
}

.modal-wrapper {
    //display: table-cell;
    //vertical-align: middle;
    /*display: block;
    justify-content: center;
    align-items: center;
    overflow: auto;*/
    //height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 50px;
}

.modal-container {
    display: inline-flex;
    flex-wrap: wrap;
    width: inherit;
    min-width: 280px;
    //max-width: calc(100% - 50px);
    padding: 0px;
    background-color: $bg-color;
    transition: all 0.3s ease;
    box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.2);
    border: 1px solid #eee;
    border-radius: $border-radius-middle;
    position: relative;
    //overflow: hidden;
}

.modal__close {
    position: absolute;
    top: -15px;
    right: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    //border-radius: 8px;
    overflow: hidden;
}

.modal-enter {
    opacity: 1;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container {
    transform: scale(1.5);
}
.modal-leave-active .modal-container {
    transform: scale(0);
}
</style>