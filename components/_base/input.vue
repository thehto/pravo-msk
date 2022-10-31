<template>
    <div class="input" v-bind:class="[classes, name, {'input--error': input.error}, {'input--success': input.success}, {'input-icon': icon}]">
        <div class="input__error" v-show="input.error && errorText">{{errorText}}</div>
        <div class="input__value" v-bind:class="{'error': input.focused}">
            <div class="input__group">
                <div class="input__icon" v-if="icon">
                    <base-icon :name="icon"/>
                </div>
                <input ref="input" :type="type" :name="name" :placeholder="placeholder" @focus="onFocus" @blur="onBlur" v-model="inputVal" @keypress="isNumber" @change="$emit('change', $event.target.value)" />
                <!-- :required="required ? true : false" -->
                <div v-show="required" class="input__icon">
                    <svg v-show="input.error" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="3" width="3" height="14" rx="1.5" transform="rotate(-45 0 3)" fill="#E33131" />
                        <rect x="10" y="1" width="3" height="14" rx="1.5" transform="rotate(45 10 1)" fill="#E33131" />
                    </svg>
                    <svg v-show="input.success" width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.55 0.45C10.95 -0.15 10.05 -0.15 9.45 0.45L4.5 5.4L2.55 3.45C1.95 2.85 1.05 2.85 0.45 3.45C-0.15 4.05 -0.15 4.95 0.45 5.55L3.45 8.55C3.75 8.85 4.05 9 4.5 9C4.95 9 5.25 8.85 5.55 8.55L11.55 2.55C12.15 1.95 12.15 1.05 11.55 0.45Z"
                            fill="#02CF79"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        event: "change",
        type: {
            type: String,
            default: "text",
        },
        name: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        classes: {
            //не правильный метод ругается ибо class по умолчанию уже бываают class => classes
            type: String,
            default: "",
        },
        required: {
            type: Boolean,
            default: () => false,
        },
        errorText: {
            type: String,
            default: "",
        },
        lengthSmooth: {
            type: Number,
            default: 0,
        },
        lengthMin: {
            type: Number,
            default: 0,
        },
        lengtMax: {
            type: Number,
            default: 0,
        },
        size: {
            type: String,
            default: "sm",
        },
        color: {
            type: String,
            default: "green",
        },
        mask: {
            type: String,
            default: "",
        },
        value: {
            type: String,
        },
        icon: {
            type: String,
            default: () => "",
        },
        check: {
            type: Boolean,
            default: () => false,
        },
    },
    data() {
        return {
            input: {
                focused: false,
                error: false,
                success: false,
            },
            sizes: {
                xs: "input--size-xs",
                sm: "input--size-sm",
                lg: "input--size-lg",
                full: "input--size-full",
            },
            colors: {
                green: "input--green",
                yellow: "input--yellow",
                "tr-green": "input--trans-green",
                "tr-yellow": "input--trans-yellow",
            },
        };
    },

    //  const btnSize = this.sizes[this.size];
    //         const ob = {
    //             'btn--disabled'   : this.disabled,
    //             'btn--processing' : this.proccess,
    //         }
    //         ob[btnSize] = true
    //         return ob

    computed: {
        className() {
            const inpSize = this.sizes[this.size];
            const ob = {};
            ob[inpSize] = true;
            return ob;
        },
        inputVal: {
            get() {
                return this.value;
            },
            set(val) {
                if(this.type == "number") {
                    this.$emit("input", parseInt(val));
                } else {
                    this.$emit("input", val);
                }
                if (val.length >= this.lengthMin) {
                    this.input.error = false;
                    this.input.success = true;
                } else {
                    this.input.error = true;
                    this.input.success = false;
                }
                //this.$emit("change", val);
            },
        },
    },
    watch: {
        check: function (newValue, OldVal) {
            if (this.value.length == 0) {
                this.input.error = true;
            }
        },
    },
    methods: {
        onFocus(e) {
            this.input.focused = true;
            if (this.value.length >= this.lengthMin) {

            } else {
                this.input.success = false;
            }
        },
        onBlur(e) {
            this.input.focused = false;
            if (this.required) {
                switch (this.type) {
                    case "text":
                        if (this.value.length >= this.lengthMin) {
                            this.input.error = false;
                        } else {
                            this.input.error = true;
                        }
                        break;
                    case "tel":
                        let value = this.value.replace(/[\D]+/g, "");
                        if (this.lengthSmooth) {
                            if (value.length == this.lengthSmooth) {
                                this.input.error = false;
                            } else {
                                this.input.error = true;
                            }
                        } else {
                            this.input.error = false;
                        }
                        break;
                    default:
                        //this.input.error = false;
                        break;
                }
                if (!this.input.error) {
                    this.input.success = true;
                }
            }
        },
        isNumber: function (event) {
            event = event ? event : window.event;
            var charCode = event.which ? event.which : event.keyCode;
            if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) &&
                charCode !== 46
            ) {
                if (this.type == "number" || this.type == "tel") {
                    event.preventDefault();
                }
            } else {
                return true;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.input {
    position: relative;
    width: 100%;
    &__value {
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        outline: none;
        border: 1px solid rgba(120, 120, 150, 0.2);
        background-color: $bg-overlay;
        //@include margin-level(green, padding, left, -4px);
        width: 100%;
        position: relative;
        border-radius: 3px;
        font-weight: 300;
        input {
            display: flex;
            width: 100%;
            background: transparent;
            border: none;
            outline: none;
            padding: 10px 15px;
            padding-left: 15px;
            margin: 0;
            font-size: $text-size;
            color: $text-primary;
            &::placeholder {
                color: rgba(var(--text-secondary), 0.3);
                //font-family: "Raleway";
            }
        }
    }
    &__group {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    &__icon {
        flex: none;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        //background-color: rgba(120, 120, 130, 0.2);
        //border-right: 1px solid rgba(120, 120, 150, 0.2);
        svg {
            fill: $text-secondary;
            max-width: 16px;
            max-height: 16px;
        }
    }
}
.input-icon {
    input {
        padding-left: 0px;
    }
}
.input-small {
	input {
		padding: 3px 6px;
		max-width: 40px;
		text-align: center;
		font-size: $text-small-size;
	}
}
.input-middle {
	input {
		padding: 6px 10px;
		font-size: $text-small-size;
	}
}
.input-inverse {
    .input__value {
        background: rgba(var(--bg-color), 0.8);
        border-radius: $border-radius-small;
        border: 1px solid rgba(var(--bg-color), 1);
    }
}
</style>