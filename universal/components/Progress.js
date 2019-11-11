import NProgress from 'nprogress'
import Router from 'next/router'

NProgress.configure({ showSpinner: false })

Router.onRouteChangeStart = (url) => NProgress.start()

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()
