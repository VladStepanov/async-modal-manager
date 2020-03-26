<template>
  <div>
    <h2>About modal</h2>
    <button @click="handleReject">Отказаться</button>
    <button @click="handleResolve">Подтвердить</button>
  </div>
</template>

<script>
export default {
  name: 'AboutModal',
  inject: ['resolveModal', 'rejectModal'],
  mounted () {
    console.log('Mount about modal')
  },
  methods: {
    handleReject () {
      this.rejectModal()
    },
    handleResolve () {
      this.resolveModal()
    }
  }
}
</script>
