import CardWorker from "./CardWorker";

const workers = ["worker1", "worker2", "worker3", "worker4", "worker5"];

export default function Cards() {
	return (
		<section
			className="
        flex 
        flex-col 
        justify-center
        items-center
        gap-5
        w-full "
		>
			{workers.map((worker) => {
				return <CardWorker key={worker} />;
			})}
		</section>
	);
}
