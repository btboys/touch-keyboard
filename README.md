# TouchKeyboard

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
