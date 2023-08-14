import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useMenu from "./useMenu";
import SubMenu from "./SubMenu";

export default function Menu() {
	const { showMenu, openMenu } = useMenu();

	return (
		<>
			<button
				onClick={openMenu}
				className="
          flex 
          justify-center 
          items-center 
          gap-2       
         rounded-full 
          border-2
          border-gray-200
          shadow-sm
          py-1 px-3
          relative"
			>
				<FontAwesomeIcon icon={faBars} />
				<img
					className="h-7 w-7 rounded-full "
					src="/images/placeholder-user.jpg"
					alt="foto de perfil"
				/>
			</button>
			{showMenu && <SubMenu />}
		</>
	);
}
