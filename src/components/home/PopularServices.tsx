import ServicesCard from "./ServiceCard";

const services = [
	{ service: "Gasista Matriculado", image: "/images/service-5.jpg" },
	{ service: "Plomero Matriculado", image: "/images/service-3.jpg" },
	{ service: "Electricista Matriculado", image: "/images/service-4.jpg" },
	{ service: "Mudanzas", image: "/images/service-2.jpg" },
	{ service: "Gasista Matriculado", image: "/images/service-5.jpg" },
	{ service: "Plomero Matriculado", image: "/images/service-3.jpg" },
	{ service: "Electricista Matriculado", image: "/images/service-4.jpg" },
	{ service: "Mudanzas", image: "/images/service-2.jpg" },
];

export default function PopularServices() {
	return (
		<article className=" flex justify-center items-center mb-24 md:mb-44">
			<div className="w-11/12 max-w-7xl flex flex-col justify-start items-start">
				<h2 className="font-bold text-xl lg:text-2xl mb-5">
					Servicios Populares
				</h2>
				<div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
					{services.map((service, index) => (
						<ServicesCard
							key={index}
							service={service.service}
							image={service.image}
						/>
					))}
				</div>
			</div>
		</article>
	);
}
