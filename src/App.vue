<template>
  <div id="app">
    <Modal name="about">
      <AboutModal />
    </Modal>
  </div>
</template>

<script>
import Modal from './components/Modal'
import AboutModal from './components/AboutModal'
import { show } from './plugins/modal'

export default {
  name: 'App',
  components: { Modal, AboutModal },
  mounted () {
    window.addEventListener('click', this.showModal)
  },
  destroyed () {
    window.removeEventListener('click', this.showModal)
  },
  methods: {
    // showModal (e) {
    //   e.stopPropagation()
    //   this.$modal.show('about')
    //     .then((modalName) => console.log('user accepted modal', modalName))
    //     .catch((modalName) => console.log('user refused modal', modalName))
    // },
    showModal (e) {
      e.stopPropagation()
      show('about')
        .then(modalName => console.log('User accepted modal', modalName))
        .catch(modalName => console.log('user refused modal', modalName))
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
