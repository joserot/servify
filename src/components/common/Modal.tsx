import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

type Type = "left" | "default";

type Props = {
	type: Type;
	children: JSX.Element;
	isOpen: boolean;
	closeModal: () => void;
};

export default function Modal({
	children,
	type = "default",
	isOpen,
	closeModal,
}: Props) {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleModalContainerClick = (e: React.SyntheticEvent) =>
		e.stopPropagation();

	if (!isBrowser || !isOpen) return null;

	const modalContent = (
		<article
			className={`
          ${type === "left" ? "justify-start" : "justify-center"}
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
           bg-neutral-800/20
          backdrop-blur-md
          w-full
      `}
			onClick={closeModal}
			onMouseDown={(e) => e.stopPropagation()}
		>
			<div
				className={`
          justify-start 
          items-center 
          flex 
          flex-col
          bg-white
         ${type === "left" ? "h-full" : "h-auto"}
         ${type === "left" ? "w-96" : "w-auto"}
           relative
           rounded-md
           overflow-hidden
           w-full
           max-w-[95vw]
           sm:max-w-xl
           max-h-[95vh]
           overflow-y-auto
      `}
				onClick={handleModalContainerClick}
			>
				<header
					className={`
            w-full
            h-10
            rounded-t
            flex
             justify-end 
             p-3
             bg-blue-500
        `}
				>
					<button
						className="
         
        "
						onClick={closeModal}
					>
						<FontAwesomeIcon className="text-white w-3" icon={faXmark} />
					</button>
				</header>
				<div className="p-5 w-full">{children}</div>
			</div>
		</article>
	);

	return ReactDOM.createPortal(
		modalContent,
		document.getElementById("modal-root")!,
	);
}
