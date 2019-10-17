import NProgress from 'nprogress'
import Router from 'next/router'

NProgress.configure({ showSpinner: false })

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()
