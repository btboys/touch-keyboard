import Keyboard from './TouchKeyboard'
import '../themes/default.less'

export const TouchKeyboard = Keyboard;

export default {
    install(vue) {
        vue.component('TouchKeyboard', Keyboard)
    }
}
