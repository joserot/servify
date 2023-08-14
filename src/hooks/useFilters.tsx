import { useContext } from "react";
import filtersContext from "<src>/context/filtersContext";

export default function useFilters() {
	const { filters, setService, setLocation } = useContext(filtersContext);

	return { filters, setService, setLocation };
}
