import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function ScrollToTop() {
    const [showScroll, setShowScroll] = useState(null);
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const checkScrollTop = useCallback(
        () => {
            if (!showScroll && window.scrollY > 400) {
                setShowScroll(true);
            } else if (showScroll && window.scrollY <= 400) {
                setShowScroll(false);
            }
        }, [showScroll],
    );

    useEffect(
        () => {
            window.addEventListener('scroll', checkScrollTop);
            return () => window.removeEventListener('scroll', checkScrollTop);
        }, [checkScrollTop]
    );

    const iconClass = "self-center fixed bottom-1/10 right-5 w-20 h-20 align-middle justify-center opacity-50 z-50 bg-gray-600 rounded-2xl hover:opacity-90 transition-opacity duration-500"

    return (

        <div className={showScroll == true ? `flex animate-fadeIn ${iconClass}` : `hidden animate-fadeOut ${iconClass}`}>
            <FontAwesomeIcon icon={faArrowUp} className="self-center" size="3x" color="white" onClick={scrollTop} />
        </div>

    )
}