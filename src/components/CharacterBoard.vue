<template>
    <div :class="pref">
        <template v-for="(keys,idx) in keyArray">
            <div :class="`${pref}-line ${pref}-line${idx+1}`">
                <div @click="pressKey(key)" :class="`${pref}-char ${pref}-${key.toLowerCase()}`" v-for="key in keys"
                     :key="key">
                    {{getLocal(key)}}
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    const PREFIX = "touch-keyboard-character";
    export default {
        name: "CharacterBoard",
        props: {
            getLocal: Function,
        },
        data() {
            return {
                pref: PREFIX,
                type: 'caps',
                caps: [
                    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
                    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
                    ["caps", "z", "x", "c", "v", "b", "n", "m"],
                    ["symbol", "blank"],
                ],
                CAPS: [
                    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
                    ["CAPS", "Z", "X", "C", "V", "B", "N", "M"],
                    ["symbol", "blank"],
                ],
                symbol: [
                    ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*"],
                    ["(", ")", "_", "-", "+", "=", "{", "}", "[", "]"],
                    [":", ";", '"', "'", "<", ">", ",", ".", "?", "/"],
                    ["back", '\\', '|', "、", "￥", "《", "》", "【", "】", "·"],
                ]
            }
        },
        computed: {
            keyArray() {
                return this[this.type];
            }
        },
        methods: {
            pressKey(key) {
                switch (key) {
                    case 'caps':
                        this.type = key.toUpperCase();
                        break;
                    case 'CAPS':
                        this.type = key.toLowerCase();
                        break;
                    case 'symbol':
                        this.type = 'symbol';
                        break;
                    case 'back':
                        this.type = 'caps';
                        break;
                    case 'blank':
                        key = ' ';
                    default:
                        this.$emit('press', key);
                }
            }
        },
    }
</script>
