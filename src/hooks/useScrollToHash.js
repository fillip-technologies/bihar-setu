import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to the #hash target after a route change or hash change, otherwise reset to top
export function useScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))

      const scrollToTarget = () => {
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return true
        }
        return false
      }

      // Try immediately
      if (scrollToTarget()) {
        return
      }

      // Check briefly every 50ms while the new route component mounts
      let attempts = 0
      const maxAttempts = 15
      const intervalId = setInterval(() => {
        attempts += 1
        if (scrollToTarget() || attempts >= maxAttempts) {
          clearInterval(intervalId)
        }
      }, 50)

      return () => clearInterval(intervalId)
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
}

export default useScrollToHash
