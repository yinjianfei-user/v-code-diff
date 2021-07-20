import { computed, defineComponent, onMounted } from 'vue-demi'
import { createHtml } from '@/lib/v-code-diff/util'
import h from '@/lib/v-code-diff/h-demi'
import hljs from 'highlight.js'
import './styles'

export default defineComponent({
  name: 'CodeDiff',
  props: {
    highlight: {
      type: Boolean,
      default: true
    },
    oldString: {
      type: String,
      default: ''
    },
    newString: {
      type: String,
      default: ''
    },
    context: {
      type: Number,
      default: 10
    },
    outputFormat: {
      type: String,
      default: 'line-by-line'
    },
    drawFileList: {
      type: Boolean,
      default: false
    },
    renderNothingWhenEmpty: {
      type: Boolean,
      default: false
    },
    // diffStyle: {
    //   type: String,
    //   default: 'word'
    // },
    fileName: {
      type: String,
      default: ''
    },
    isShowNoChange: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const html = computed(() => createHtml(props.oldString, props.newString, props.context, props.outputFormat, props.drawFileList, props.renderNothingWhenEmpty, props.fileName, props.isShowNoChange))
    onMounted(() => {
      if (props.highlight) {
        const elements = document.querySelectorAll('.d2h-wrapper .d2h-code-line-ctn')
        elements.forEach((el) => {
          hljs.highlightElement(<HTMLElement>el)
        })
      }
    })
    return {
      html
    }
  },
  render () {
    return h('div', {
      domProps: {
        innerHTML: this.html
      }
    })
  }
})
