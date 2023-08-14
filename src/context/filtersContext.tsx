import { createContext } from "react";
import { useState } from "react";

interface Props {
	children: JSX.Element;
}

interface Filters {
	service: string;
	location: string;
}

interface FiltersContextValue {
	filters: Filters;
	setService: (service: string) => void;
	setLocation: (location: string) => void;
}

const filtersContext = createContext<FiltersContextValue>({
	filters: { service: "", location: "Buenos Aires, Argentina" },
	setService: (service: string) => {},
	setLocation: (location: string) => {},
});

export function FiltersProvider({ children }: Props) {
	const [filters, setFilters] = useState<Filters>({
		service: "",
		location: "Buenos Aires, Argentina",
	});

	const setService = (service: string) => {
		setFilters({ ...filters, service });
	};

	const setLocation = (location: string) => {
		setFilters({ ...filters, location });
	};

	const value = {
		filters,
		setService,
		setLocation,
	};

	return (
		<filtersContext.Provider value={value}>{children}</filtersContext.Provider>
	);
}

export default filtersContext;
