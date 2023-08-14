import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faBriefcase,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import servicesList from "../../../data/servicesList";
import locationsList from "../../../data/locationsList";
import Suggestions from "./Suggestions";
import { useRouter } from "next/router";
import useFilters from "<src>/hooks/useFilters";

export default function Searcher() {
	const { filters, setService, setLocation } = useFilters();
	const [showService, setShowService] = useState(false);
	const [showLocation, setShowLocation] = useState(false);

	const router = useRouter();

	const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!servicesList.includes(filters.service))
			return alert("Servicio no encontrado");

		router.push("/buscador");
	};

	return (
		<div
			className="
          lg:flex
          w-full 
          max-w-[500px] 
          rounded-full 
          h-12
          border-2
          border-gray-200
          shadow-sm
          bg-white"
		>
			<form
				onSubmit={handlerSubmit}
				className="
            flex 
            flex-row 
            items-center
            w-full 
            h-full
            relative"
			>
				<div className="w-10/12 md:w-1/2 h-full relative flex items-center  md:border-r-2 border-gray-200">
					<FontAwesomeIcon
						className="absolute left-2 text-blue-500 text-sm"
						icon={faBriefcase}
					/>
					<input
						value={filters.service}
						onChange={(e) => setService(e.target.value)}
						onFocus={() => setShowService(true)}
						type="text"
						placeholder="Buscar Servicio"
						className="border-none outline-none w-full h-full py-1 px-2 pl-8 bg-transparent text-gray-800"
					/>
					<Suggestions
						list={servicesList}
						query={filters.service}
						setQuery={setService}
						show={showService}
						setShow={setShowService}
					/>
				</div>
				<div className="w-/2 h-full relative hidden md:flex items-center">
					<FontAwesomeIcon
						className="absolute left-1 md:left-2 text-blue-500 text-sm"
						icon={faLocationDot}
					/>
					<input
						value={filters.location}
						onChange={(e) => setLocation(e.target.value)}
						onFocus={() => setShowLocation(true)}
						type="text"
						placeholder="Ubicación"
						disabled
						className=" border-none outline-none w-full h-full  py-1 px-2 pl-5 md:pl-8 bg-transparent text-gray-800 disabled:cursor-not-allowed disabled:text-gray-400"
					/>
					<Suggestions
						list={locationsList}
						query={filters.location}
						setQuery={setLocation}
						show={showLocation}
						setShow={setShowLocation}
					/>
				</div>
				<button className="absolute right-1 h-9 w-9 rounded-full bg-blue-500 text-white">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</form>
		</div>
	);
}
