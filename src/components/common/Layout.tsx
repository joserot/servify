import { Nunito } from "next/font/google";

const nunito = Nunito({
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

interface Props {
	children: JSX.Element;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<div className={`${nunito.className} `}>{children}</div>
		</>
	);
}
