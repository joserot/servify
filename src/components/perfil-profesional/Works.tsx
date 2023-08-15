import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Works() {
	return (
		<div
			className="
        bg-white
          rounded
          w-2/3
          p-10
          mt-10
          md:mt-20
          flex
          flex-col
          justify-center
          items-start
          "
		>
			<h2
				className="
            font-semibold
            text-2xl
            mb-8"
			>
				Trabajos Realizados
			</h2>
			<div className="mb-8">
				<p className="text-gray-500">No agregaste ningún trabajo</p>
			</div>
			<button
				type="submit"
				className="
                bg-blue-500 
                hover:bg-blue-600
                transition-colors
                text-white 
                rounded 
                py-1 
                px-2
                flex
                items-center
                justify-center
                gap-2
                self-end
                "
			>
				Agregar Trabajo <FontAwesomeIcon icon={faPlus} />
			</button>
		</div>
	);
}
