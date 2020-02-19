<template>
    <div id="app">
        <h1>{{val}}</h1>
        <TouchKeyboard v-model="val"/>
    </div>
</template>

<script>
    import TouchKeyboard from "@/components/TouchKeyboard";

    export default {
        components: {TouchKeyboard},
        data() {
            return {
                val: ''
            }
        },
    }
</script>

<style lang="less">

</style>
