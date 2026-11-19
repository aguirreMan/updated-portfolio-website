import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'

export default function GoogleAnalyticsTracker() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    if (!import.meta.env.PROD) return

    ReactGA.initialize('G-L51VDZZCB3', {
      gtagOptions: {
        send_page_view: false,
      },
    })
  }, [])

  useEffect(() => {
    if (!import.meta.env.PROD) return

    ReactGA.send({
      hitType: 'pageview',
      page: pathname + search,
      title: document.title,
    })
  }, [pathname, search])

  return null
}
