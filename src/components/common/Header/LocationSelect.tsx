import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import useFilters from "<src>/hooks/useFilters";

export default function LocationSelect() {
	const { filters } = useFilters();

	return (
		<div className="border-t border-gray-300 w-full flex md:hidden justify-center items-center">
			<button className="w-full text-gray-500 py-1">
				<FontAwesomeIcon className="text-sm" icon={faLocationDot} />{" "}
				{filters.location}{" "}
				{/* <FontAwesomeIcon className="text-sm ml-2" icon={faChevronDown} /> */}
			</button>
		</div>
	);
}
