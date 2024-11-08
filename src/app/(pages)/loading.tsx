import { faSpinner } from '@awesome.me/kit-ac8ad9255a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() {
	return (
		<div className="text-4xl text-white text-center">
			<FontAwesomeIcon icon={faSpinner} spin />
		</div>
	)
}
