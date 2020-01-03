import Alert from './alert-native.js'
import Button from './button-native.js'
import Carousel from './carousel-native.js'
import Collapse from './collapse-native.js'
import Dropdown from './dropdown-native.js'
import Modal from './modal-native.js'
import Popover from './popover-native.js'
import ScrollSpy from './scrollspy-native.js'
import Tab from './tab-native.js'
import Toast from './toast-native.js'
import Tooltip from './tooltip-native.js'
import {initCallback} from './util/callbacks.js'
import {supports} from './util/globals.js'
import './util/init.js'

export default {
  components: {
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
  },
  initCallback,
  supports
}