import {
  computed,
  defineComponent,
  DirectiveArguments,
  isVue3,
  PropType,
  resolveDirective,
  withDirectives,
  h
} from 'vue-demi'
import { createHtml, highlightElements } from '@/lib/v-code-diff/util'
import './styles'

export default defineComponent({
  name: 'CodeDiff',
  directives: {
    highlight: async function (el, binding) {
      const props = binding.value.props
      const ctx = binding.value.ctx
      if (props.highlight) {
        await highlightElements(el, props, ctx)
      }
    }
  },
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
    diffStyle: {
      type: String as PropType<'word' | 'char'>,
      default: 'word'
    },
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
    const html = computed(() => createHtml(props))
    return {
      html,
      props,
      ctx
    }
  },
  render () {
    const directiveValue = { props: this.props, ctx: this.ctx }
    if (isVue3) {
      const highlight = resolveDirective('highlight')
      return withDirectives(h('div', {
        innerHTML: this.html
      }), <DirectiveArguments>[
        [highlight, directiveValue]
      ])
    } else {
      return h('div', {
        domProps: {
          innerHTML: this.html
        },
        directives: [
          {
            name: 'highlight',
            value: directiveValue
          }
        ]
      })
    }
  }
})
