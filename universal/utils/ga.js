import ReactGA from 'react-ga'

const nextConfig = {
  gaKey: process.env.gaKey
}

export const initGA = () => {
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
    ReactGA.initialize(nextConfig.gaKey)
  }
}

export const logPageView = () => {
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
}
