import Filters from "./Filters";
import Cards from "./Cards";
import OrderBy from "./OrderBy";
import ButtonFilters from "./ButtonFilters";

export default function Content() {
	return (
		<article
			className="
        flex 
        flex-col 
        justify-center
        start-center
        md:flex-row
        w-11/12
        max-w-7xl
        mx-auto
        mt-10
        h-full"
		>
			<Filters />
			<div
				className="
        w-full 
        lg:w-2/3"
			>
				<OrderBy />
				<Cards />
			</div>
			<ButtonFilters />
		</article>
	);
}
