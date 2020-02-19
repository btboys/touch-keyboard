import TouchKeyboard from './TouchKeyboard'
import '../themes/default.less'

export default {
    install(vue) {
        vue.component('TouchKeyboard', TouchKeyboard)
    }
}
