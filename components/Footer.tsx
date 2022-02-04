import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFlickr} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="max-w-full container flex-shrink-0 h-auto p-1 bg-gray-600">
            <div className="flex flex-row-reverse flex-none">
                <div className="p-4">
                    <a href="https://www.flickr.com/photos/azima_97" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFlickr} size="3x" color="white"/>
                    </a>
                </div>
                <div className="p-4">
                    <a href="https://www.instagram.com/joe_mcilwraith" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="3x" color="white"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}