import { useState, useEffect } from "react";

export default function useMenu() {
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		function handleMouseDown(e: MouseEvent) {
			if (showMenu) {
				closeMenu();
			}
		}
		document.addEventListener("mousedown", handleMouseDown);
		return () => {
			document.removeEventListener("mousedown", handleMouseDown);
		};
	});

	const openMenu = () => {
		setShowMenu(true);
	};

	const closeMenu = () => {
		setShowMenu(false);
	};

	return { showMenu, openMenu };
}
