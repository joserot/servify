import CardWorker from "../buscador/CardWorker";

export default function Featured() {
	const featured = ["a"];

	return (
		<article className="mb-24 md:mb-44 flex justify-center items-center">
			<div className="w-11/12 max-w-7xl">
				<h2 className="font-bold text-xl lg:text-2xl mb-5">
					Profesionales Destacados
				</h2>
				<div className="flex gap-2 overflow-auto">
					{featured.map((item, index) => {
						return <CardWorker square={true} key={index} />;
					})}
				</div>
			</div>
		</article>
	);
}
