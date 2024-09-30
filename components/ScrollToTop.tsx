'use client';

import { Button } from '@/components/ui/button';
import { ChevronUpIcon } from '@radix-ui/react-icons';
import { useCallback, useEffect, useState } from 'react';

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
    'fixed fixed bottom-32 right-14 items-center justify-center lg:h-14 lg:w-14 h-10 w-10'

  return (
      <Button variant="outline" className={
        showScroll === true
          ? `animate-fadeIn flex ${iconClass} `
          : `animate-fadeOut hidden ${iconClass}`
      }
        onClick={scrollTop}
      >
        <ChevronUpIcon className='h-8 w-8 lg:h-10 lg:w-10' />
      </Button>
  )
}
