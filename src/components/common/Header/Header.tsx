import Logo from "./Logo";
import Searcher from "../Searcher/Searcher";
import Menu from "./Menu";
import LocationSelect from "./LocationSelect";

interface Props {
	searcher?: boolean;
}

export default function Header({ searcher = true }: Props) {
	return (
		<header
			className="
            flex
            flex-col
            items-center
            justify-center
            sticky
            top-0
            shadow-md
            bg-white
            z-10
            "
		>
			<div
				className=" 
            w-full
            py-2 
            px-5 
            flex
            flex-row
            items-center
            justify-between"
			>
				<Logo />
				<section className="hidden lg:block">
					{searcher && <Searcher />}
				</section>
				<Menu />
			</div>
			<LocationSelect />
		</header>
	);
}
