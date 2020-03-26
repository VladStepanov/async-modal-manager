const modals = new Map()

const registerModal = (name, vm) => {
  modals.set(name, vm)
}

const show = (name) => {
  return new Promise((resolve, reject) => {
    const modal = modals.get(name)
    modal.open()
    modal.$on('resolve', function (...args) {
      resolve(...args)
      setImmediate(() => {
        modal.close()
      })
    })
    modal.$on('reject', function (...args) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(...args)
      setImmediate(() => {
        modal.close()
      })
    })
  })
}

const hideImmediately = (name) => {
  const modal = modals.get(name)
  modal.close()
}

const modalPlugin = {
  install (Vue, options) {
    Vue.prototype.$modal = {
      show,
      hideImmediately
    }
  }
}

export { modalPlugin, registerModal, show, hideImmediately }
