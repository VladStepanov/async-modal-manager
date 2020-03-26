<template>
  <div v-if="isOpen">
    <slot />
  </div>
</template>

<script>
import { registerModal } from '../plugins/modal'

export default {
  name: 'Modal',
  props: {
    name: { type: String, required: true }
  },
  data: () => ({
    isOpen: false
  }),
  mounted () {
    registerModal(this.name, this)
  },
  provide () {
    return {
      resolveModal: () => {
        this.$emit('resolve', this.name)
      },
      rejectModal: () => {
        this.$emit('reject', this.name)
      }
    }
  },
  methods: {
    open () {
      this.isOpen = true
    },
    close () {
      this.isOpen = false
    }
  }
}
</script>
