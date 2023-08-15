import Link from "next/link";
import Image from "next/image";

export default function Logo() {
	return (
		<section>
			<Link
				href="/"
				className="
            text-2xl
            font-extrabold
            text-blue-500
            "
			>
				{/* <Image
					src="/images/logo.jpeg"
					alt="Servify Logo"
					width={200}
					height={50}
					className="cursor-pointer w-24 h-auto"
				/> */}
				<h1>Servify</h1>
			</Link>
		</section>
	);
}
