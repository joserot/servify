import LoginButtons from "../Modal-login/LoginButtons";
import FormRegister from "./FormRegister";

interface Props {
	openModalLogin: () => void;
	closeModal: () => void;
}

export default function ModalRegister({ openModalLogin, closeModal }: Props) {
	const goToLogin = (e: React.SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		closeModal();
		openModalLogin();
	};

	return (
		<div className="flex flex-col justify-center items-center ">
			<span className="text-3xl font-semibold mb-5">Registrarse</span>
			<LoginButtons />
			{/* Linea divisoria */}
			<div className="relative flex justify-center items-center w-full h-10 my-5">
				<div className="w-full h-[1px] bg-gray-300"></div>
				<span className="absolute bg-white px-5 text-gray-500 text-sm">O</span>
			</div>
			<FormRegister />
			<div className="mt-5">
				<span className="text-sm text-gray-500">
					¿Ya tienes cuenta?{" "}
					<button onClick={goToLogin} className="text-blue-500 hover:underline">
						Inicia Sesión
					</button>
				</span>
			</div>
		</div>
	);
}
