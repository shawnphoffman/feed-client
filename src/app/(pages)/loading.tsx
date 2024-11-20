import { faSpaceStationMoonAlt } from '@awesome.me/kit-ac8ad9255a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() {
	return (
		<div className="text-6xl text-white text-center mt-4">
			<FontAwesomeIcon icon={faSpaceStationMoonAlt} beatFade />
		</div>
	)
}
