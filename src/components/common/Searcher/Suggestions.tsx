interface Props {
	list: string[];
	query: string;
	setQuery: (query: string) => void;
	show: boolean;
	setShow: (show: boolean) => void;
}

export default function Suggestions({
	list,
	query,
	setQuery,
	show,
	setShow,
}: Props) {
	if (!query.length || !show) return null;

	const handleClick = (item: string) => {
		setQuery(item);
	};

	const filteredList = (arr: string[]) => {
		return arr.filter((item: string) => {
			return item.toLowerCase().includes(query.toLowerCase());
		});
	};

	return (
		<div
			className="
              bg-white
              absolute
              left-0
              top-12
              w-full
              max-h-48
              overflow-y-auto
              shadow-md
              rounded"
		>
			<ul>
				{filteredList(list).length ? (
					filteredList(list).map((item) => {
						return (
							<li
								onClick={() => {
									handleClick(item);
									setShow(false);
								}}
								key={item}
								className="
               color-gray-300
               text-sm
               py-2
               px-4
               cursor-pointer
               border-b
               border-gray-200"
							>
								{item}
							</li>
						);
					})
				) : (
					<li className="color-gray-300 text-sm py-2 px-4">
						No se encontraron resultados
					</li>
				)}
			</ul>
		</div>
	);
}
