import Modal from "../Modal";
import useModal from "../useModal";
import ModalLogin from "../Modal-login/ModalLogin";
import ModalRegister from "../Modal-register/ModalRegister";

export default function SubMenu() {
	const [isOpenLogin, openModalLogin, closeModalLogin] = useModal(false);
	const [isOpenRegister, openModalRegister, closeModalRegister] =
		useModal(false);

	return (
		<>
			{/* MODALS */}
			<Modal type="default" isOpen={isOpenLogin} closeModal={closeModalLogin}>
				<ModalLogin
					openModalRegister={openModalRegister}
					closeModal={closeModalLogin}
				/>
			</Modal>

			<Modal
				type="default"
				isOpen={isOpenRegister}
				closeModal={closeModalRegister}
			>
				<ModalRegister
					openModalLogin={openModalLogin}
					closeModal={closeModalRegister}
				/>
			</Modal>

			{/* START SUBMENU */}
			<nav
				onMouseDown={(e) => e.stopPropagation()}
				className="
          absolute
          top-16
          right-5
          bg-white
          rounded
          shadow-md
          flex
          flex-col
      "
			>
				<ul>
					<li className=" w-60">
						<button
							onClick={openModalRegister}
							className="flex items-center justify-start w-full px-5 py-2 font-semibold hover:bg-gray-100"
						>
							Registrate
						</button>
					</li>
					<li className=" w-60 border-b-[1px] border-gray-200">
						<button
							onClick={openModalLogin}
							className="flex items-center justify-start w-full px-5 py-2 hover:bg-gray-100"
						>
							Iniciar Sesión
						</button>
					</li>
					<li className=" w-60">
						<button className="flex items-center justify-start w-full px-5 py-2 hover:bg-gray-100">
							Ofrecé tus servicios
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
}
