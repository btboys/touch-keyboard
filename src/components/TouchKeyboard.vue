<template>
    <div class="touch-keyboard">
        <CharacterBoard @press="press" :getLocal="getLocal"/>
        <NumberBoard @press="press" :getLocal="getLocal"/>
    </div>
</template>

<script>
    import CharacterBoard from "@/components/CharacterBoard";
    import NumberBoard from "@/components/NumberBoard";

    const DEFAULT_I18N = {
        del: "退格",
        back: "返回",
        symbol: "符号",
        blank: "空格",
        caps: "大写",
        CAPS: "小写",
    };

    export default {
        name: "TouchKeyboard",
        components: {NumberBoard, CharacterBoard},
        props: {
            regExp: RegExp,
            i18n: {
                type: Object,
                default() {
                    return DEFAULT_I18N;
                }
            },
        },
        data() {
            return {
                input: ''
            }
        },
        methods: {
            press(key) {
                let len = this.input.length;
                let val = this.input;
                if (key === 'del') {
                    len > 0 && (val = val.slice(0, len - 1));
                } else {
                    val += key;
                }
                if (val && this.regExp) {
                    if (this.regExp.test(val)) {
                        this.input = val;
                    }
                } else {
                    this.input = val;
                }
                this.$emit('input', this.input);
                this.$emit('change', this.input);
            },
            getLocal(key) {
                if (Object.keys(DEFAULT_I18N).includes(key)) {
                    return this.i18n[key] || key
                }
                return key;
            }
        },
    }
</script>
