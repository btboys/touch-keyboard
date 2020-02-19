<template>
    <div class="touch-keyboard-number">
        <div @click="pressKey(key)" v-for="key in keys" :class="getClass(key)" :key="key">
            {{getLocal(key)}}
        </div>
    </div>
</template>

<script>
    const PREFIX = "touch-keyboard-number";
    export default {
        name: "NumberBoard",
        props: {
            getLocal: Function,
        },
        data() {
            return {
                keys: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', 'del']
            }
        },
        methods: {
            getClass(key) {
                let clazz = PREFIX + '-num ';
                switch (key) {
                    case '0':
                        clazz += PREFIX + '-zero';
                        break;
                    case 'del':
                        clazz = PREFIX + '-del';
                        break;
                }
                return clazz;
            },
            pressKey(key) {
                this.$emit('press', key);
            }
        },
    }
</script>
