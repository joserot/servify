import Image from "next/image";
import { useRouter } from "next/router";
import useFilters from "<src>/hooks/useFilters";

interface Props {
	service: string;
	image: string;
}

export default function ServicesCard({ service, image }: Props) {
	const router = useRouter();
	const { setService } = useFilters();

	const handlerClick = () => {
		setService(service);
		router.push("/buscador");
	};

	return (
		<div
			onClick={handlerClick}
			className="cursor-pointer w-full sm:max-w-sm rounded overflow-hidden shadow-md hover:shadow-lg  transition-shadow flex sm:flex-col"
		>
			<Image
				src={image}
				alt={service}
				width={400}
				height={400}
				className="w-36 h-auto sm:w-full"
			/>
			<div className="px-6 py-4 flex justify-center items-center">
				<div className="text-md mb-2 sm:text-center">{service}</div>
			</div>
		</div>
	);
}
