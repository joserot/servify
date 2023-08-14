import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMapLocationDot,
	faHouse,
	faStar,
	faCheck,
	faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import Whatsapp from "../icons/Whatsapp";
import useModal from "../common/useModal";
import Modal from "../common/Modal";
import ModalLogin from "../common/Modal-login/ModalLogin";
import ModalRegister from "../common/Modal-register/ModalRegister";
import ModalComments from "../common/ModalComments";
import { useRouter } from "next/router";

interface Props {
	square?: boolean;
}

export default function CardWorker({ square = false }: Props) {
	const [isOpenLogin, openModalLogin, closeModalLogin] = useModal(false);
	const [isOpenRegister, openModalRegister, closeModalRegister] =
		useModal(false);
	const [isOpenComments, openModalComments, closeModalComments] =
		useModal(false);

	const router = useRouter();

	const goLogin = (e: React.SyntheticEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		openModalLogin();
	};

	const goComments = (e: React.SyntheticEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		openModalComments();
	};

	const goProfile = () => {
		router.push("/profesional/1");
	};

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

			<Modal
				type="default"
				isOpen={isOpenComments}
				closeModal={closeModalComments}
			>
				<ModalComments />
			</Modal>

			{/* START CARD */}

			<div
				onClick={goProfile}
				className={`
        bg-white 
        rounded 
        shadow-sm 
        w-full
        ${square ? "max-w-sm hover:shadow-xl" : "hover:shadow-lg"}
        p-3
        flex
        flex-col
        transition-shadow
        cursor-pointer
        border
        border-gray-200
        `}
			>
				<div
					className="
        w-full
        flex
        justify-start
        items-start
        gap-5"
				>
					<div
						className={`
          ${square ? "w-1/3" : "w-1/3 sm:w-auto"}
          flex
          flex-col
          gap-1
          justify-start
          items-start
          `}
					>
						<Image
							src="/images/person.png"
							alt="person"
							width={400}
							height={400}
							className="
              w-28 
              h-28
              object-cover
              rounded
              border
              border-gray-300"
						/>
					</div>
					<div
						className="
          w-2/3
          flex
          flex-col
          justify-start
          items-start
          "
					>
						<h3
							className={`
              font-semibold 
              mb-2 
              ${square ? "text-base" : " sm:text-lg md:text-xl"}
             `}
						>
							Pedro Rodriguez
						</h3>
						<span
							className={`
            ${square ? "text-sm" : "text-sm sm:text-base"}
              text-gray-500 
              mb-1`}
						>
							<FontAwesomeIcon
								icon={faMapLocationDot}
								className="text-blue-500"
							/>{" "}
							Buenos Aires
						</span>
						<span
							className={`
            ${square ? "text-sm" : "text-sm sm:text-base"}
              text-gray-500 
              mb-1`}
						>
							<FontAwesomeIcon icon={faHouse} className="text-blue-500" /> En tu
							domicilio
						</span>
						<span
							className={`
            ${square ? "text-sm" : "text-sm sm:text-base"}
              text-gray-500 
              mb-1`}
						>
							<FontAwesomeIcon icon={faBriefcase} className="text-blue-500" />{" "}
							Gasista Matriculado
						</span>
						<div
							className={`
            ${square ? "text-sm" : "text-sm sm:text-base"}
              text-yellow-500 
              mb-1`}
						>
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<FontAwesomeIcon icon={faStar} />
							<span className="text-gray-500 ml-2">(16)</span>
						</div>
						<button
							onClick={goComments}
							className={`
                ${square ? "text-xs" : "text-xs sm:text-sm"}
                text-blue-500 
                mb-2 
                hover:underline`}
						>
							13 Recomendaciones
						</button>
					</div>
				</div>

				<div
					className={`
        ${square ? "" : "sm:flex-row sm:justify-between"}
          flex
          flex-col
       `}
				>
					<div
						className={`
              ${square ? "w-full" : "w-full sm:w-2/3 sm:border-none"}    
              border-t 
              border-gray-300 
              flex 
              justify-start 
              items-start 
              flex-wrap 
              py-2 
              gap-2`}
					>
						<span
							className={`
            ${square ? "text-xs" : "text-xs sm:text-sm"}
              p-1 
              bg-green-300 
              rounded-3xl`}
						>
							<FontAwesomeIcon icon={faCheck} /> Experiencia Verificada
						</span>
						<span
							className={`
            ${square ? "text-xs" : "text-xs sm:text-sm"}
              p-1 
              bg-green-300 
              rounded-3xl`}
						>
							<FontAwesomeIcon icon={faCheck} /> DNI Verificado
						</span>
						<span
							className={`
            ${square ? "text-xs" : "text-xs sm:text-sm"}
              p-1 
              bg-green-300 
              rounded-3xl`}
						>
							<FontAwesomeIcon icon={faCheck} /> Matrícula Verificada
						</span>
					</div>
					<button
						onClick={goLogin}
						className={`
            w-full 
            ${square ? "" : "sm:w-auto sm:self-end sm:px-4  sm:py-2 sm:mt-2"}
            bg-blue-500 
            flex 
            items-center 
            justify-center 
            gap-1 
            text-white 
            px-3 
            py-1 
            rounded-md 
            self-end 
            mt-4
            hover:bg-blue-600
            transition-colors`}
					>
						<Whatsapp /> Contactar
					</button>
				</div>
			</div>
		</>
	);
}
