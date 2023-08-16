import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalAddWork from "./ModalAddWork";
import Modal from "../common/Modal";
import useModal from "../common/useModal";

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
          p-10
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
					onClick={openModalWork}
				>
					Agregar trabajo <FontAwesomeIcon icon={faPlus} />
				</button>
			</div>
		</>
	);
}
