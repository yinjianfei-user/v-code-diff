import { computed, defineComponent, onMounted, onUpdated, PropType } from 'vue-demi'
import { createHtml, highlightElements } from '@/lib/v-code-diff/util'
import h from '@/lib/v-code-diff/h-demi'
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
      type: String as PropType<'line-by-line' | 'side-by-side'>,
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
  emits: ['before-render', 'after-render'],
  setup (props, ctx) {
    const html = computed(() => createHtml(props)
    )
    onMounted(() => {
      if (props.highlight) {
        highlightElements(props, ctx)
      }
    })
    onUpdated(() => {
      if (props.highlight) {
        highlightElements(props, ctx)
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
