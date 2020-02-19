# TouchKeyboard

## Installation
```
npm install touch-keyboard
```
or
```
yarn add touch-keyboard
```
## Initialization
```javascript
import Vue from 'vue'
import TouchKeyboard from 'touch-keyboard'

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
