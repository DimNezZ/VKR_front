import { useAppStore } from '@/stores/app.js'
import { pinia } from '@/stores/instance.js'
import ky from 'ky'

const appStore = useAppStore(pinia)

export const api = ky.create({
  prefixUrl: 'http://176.108.253.17:3000/',
  hooks: {
    beforeRequest: [
      () => {
        appStore.setLoading(true)
      },
    ],
    afterResponse: [
      () => {
        setTimeout(() => {
          appStore.setLoading(false)
        }, 500)
      },
    ],
    // beforeError: [
    //   (error) => {
    //     setTimeout(() => {
    //       appStore.setLoading(false)
    //     }, 500)
    //     return error
    //   },
    // ],
  },
})
