import { faFlickr, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	return (
		<footer className="flex max-w-full flex-none basis-1/12 justify-end bg-gray-600 p-1 bottom-0">
			<div className="flex flex-none flex-row-reverse self-center">
				<div className="p-4">
					<a
						href="https://www.flickr.com/photos/azima_97"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faFlickr} size="3x" color="white" />
					</a>
				</div>
				<div className="p-4">
					<a
						href="https://www.instagram.com/joe_mcilwraith"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faInstagram} size="3x" color="white" />
					</a>
				</div>
			</div>
		</footer>
	);
}
