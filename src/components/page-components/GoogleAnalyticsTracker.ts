import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

export default function GoogleAnalyticsTracker() {

  const location = useLocation()
  useEffect(() => {
    ReactGA.initialize('G-L51VDZZCB3')
  }, [])

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: document.title
    })
  }, [location])

  return null
}
