# TouchKeyboard
![Jietu20200219.gif](https://raw.githubusercontent.com/btboys/yosoro/master/img/Jietu20200219-161151.gif)
## Installation
```
npm install vue-js-keyboard
```
or
```
yarn add vue-js-keyboard
```
## Initialization
```javascript
import Vue from 'vue'
import TouchKeyboard from 'vue-js-keyboard'
import 'vue-js-keyboard/dist/TouchKeyboard.css'

Vue.use(TouchKeyboard);
```
## Usage
```vue
<template>
    <div id="app">
        <h1>{{val}}</h1>
        <touch-keyboard v-model="val"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            val: ''
        }
    },
}
</script>
```
## Page Usage
```vue
<template>
    <div id="app">
        <h1>{{val}}</h1>
        <touch-keyboard v-model="val"/>
    </div>
</template>

<script>
import {TouchKeyboard} from 'vue-js-keyboard'
import 'vue-js-keyboard/dist/TouchKeyboard.css'
export default {
    components: {TouchKeyboard},
    data() {
        return {
            val: ''
        }
    },
}
</script>
```

## i18n
```vue
<template>
    <div id="app">
        <h1>{{val}}</h1>
        <touch-keyboard v-model="val" :i18n="i18n"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            val: '',
            i18n: {
                del: "退格",
                back: "返回",
                symbol: "符号",
                blank: "空格",
                caps: "大写",
                CAPS: "小写",
            }
        }
    },
}
</script>
```
