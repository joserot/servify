import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import ModalAddWork from "./ModalAddWork";
import Modal from "../common/Modal";
import useModal from "../common/useModal";

const works = [
	{
		id: 1,
		name: "Arreglo de cocina",
		description:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		images: [],
	},
	{
		id: 2,
		name: "Lorem ipsum dolor ",
		description:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		images: [],
	},
	{
		id: 3,
		name: "Arreglo de cocina",
		description:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		images: [],
	},
];

export default function Works() {
	const [isOpenWork, openModalWork, closeModalWork] = useModal(false);

	return (
		<>
			{/* MODAL */}
			<Modal type="default" isOpen={isOpenWork} closeModal={closeModalWork}>
				<ModalAddWork closeModal={closeModalWork} />
			</Modal>

			{/* START WORKS */}
			<div
				className="
        bg-white
          rounded
          w-full
          lg:w-2/3
          p-5
          md:p-10
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
				<div className="mb-8 w-full">
					{works && works.length ? (
						works.map((work) => {
							return (
								<div
									key={work.id}
									className="mb-5 w-full flex flex-col md:flex-row gap-2 justify-between items-start border-b-2 pb-3 last:border-b-0"
								>
									<div className="w-full">
										<h3 className="font-semibold text-lg mb-1">{work.name}</h3>
										<p className="text-gray-500">{work.description}</p>
									</div>
									<div className="w-20 flex justify-end items-center gap-3">
										<button
											className="
                        py-1
                        px-2 
                        rounded 
                        text-white 
                        bg-blue-500 
                    hover:bg-blue-600"
										>
											<FontAwesomeIcon icon={faPen} />
										</button>
										<button
											className="
                        py-1
                        px-2 
                        rounded 
                    text-white 
                    bg-red-500 
                    hover:bg-red-600"
										>
											<FontAwesomeIcon icon={faTrash} />
										</button>
									</div>
								</div>
							);
						})
					) : (
						<p className="text-gray-500">No agregaste ningún trabajo</p>
					)}
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
					onClick={openModalWork}
				>
					Agregar trabajo <FontAwesomeIcon icon={faPlus} />
				</button>
			</div>
		</>
	);
}
