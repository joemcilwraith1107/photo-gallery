'use client';

import { useCallback, useState } from 'react'
import { useEffect } from 'react'

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false)
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true)
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false)
    }
  }, [showScroll])

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [checkScrollTop])

  const iconClass =
    'self-center fixed align-middle justify-center opacity-50 z-50 bg-gray-600 rounded-2xl hover:opacity-90 transition-opacity duration-500 bottom-28 right-8 w-14 h-14 md:bottom-28 md:right-10 md:w-20 md:h-20 2xl:right-20'

  return (
    <div
      className={
        showScroll == true
          ? `animate-fadeIn flex ${iconClass}`
          : `animate-fadeOut hidden ${iconClass}`
      }
    >
      <FontAwesomeIcon
        icon={faArrowUp}
        className="self-center text-xl md:text-4xl "
        color="white"
        onClick={scrollTop}
      />
    </div>
  )
}
