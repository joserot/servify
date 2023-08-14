import FormLogin from "./FormLogin";
import LoginButtons from "./LoginButtons";

interface Props {
	openModalRegister: () => void;
	closeModal: () => void;
}

export default function ModalLogin({ closeModal, openModalRegister }: Props) {
	const goToRegister = (e: React.SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		closeModal();
		openModalRegister();
	};

	return (
		<div className="flex flex-col justify-center items-center ">
			<span className="text-3xl font-semibold mb-5">Iniciar Sesión</span>
			<LoginButtons />
			{/* Linea divisoria */}
			<div className="relative flex justify-center items-center w-full h-10 my-5">
				<div className="w-full h-[1px] bg-gray-300"></div>
				<span className="absolute bg-white px-5 text-gray-500 text-sm">O</span>
			</div>
			<FormLogin />
			<div className="mt-5">
				<span className="text-sm text-gray-500">
					¿No tienes cuenta?{" "}
					<button
						onClick={goToRegister}
						className="text-blue-500 hover:underline"
					>
						Registrate
					</button>
				</span>
			</div>
		</div>
	);
}
