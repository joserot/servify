interface Props {
	closeModal: () => void;
	idWork?: string;
}

export default function ModalAddWork({ closeModal, idWork }: Props) {
	return (
		<div className="flex flex-col justify-center items-center">
			<span className="text-3xl font-semibold mb-8">Agregar trabajo</span>
			<form className="w-full flex flex-col gap-4">
				<label className="flex flex-col w-full">
					Nombre del trabajo
					<input
						name="name"
						type="text"
						className="border border-gray-300 rounded outline-none py-1 px-2"
					/>
				</label>
				<label className="flex flex-col w-full">
					Descripción del trabajo
					<textarea
						name="name"
						className="border border-gray-300 rounded outline-none py-1 px-2"
					/>
				</label>
				<label className="flex flex-col w-full">
					Imagenes del trabajo
					<input
						name="name"
						type="file"
						className="border border-gray-300 rounded outline-none py-1 px-2"
					/>
				</label>
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
                w-full"
					onClick={closeModal}
				>
					Guardar
				</button>
			</form>
		</div>
	);
}
