import Link from "next/link";

export default function Footer() {
	return (
		<footer
			className="
          absolute
          md:fixed 
          bottom-0 
          w-full
          bg-white
          flex
          gap-x-5
          flex-wrap
          justify-between
          items-center
          px-5
          py-2
          border-t
          border-gray-200"
		>
			<div className="">
				<span>© 2023 Servify</span>
				&nbsp;
				<span>·</span>
				&nbsp;
				<Link href={"/"} className="hover:underline">
					Privacidad
				</Link>
				&nbsp;
				<span>·</span>
				&nbsp;
				<Link href={"/"} className="hover:underline">
					Términos
				</Link>
			</div>
			<div className="">
				<Link href={"/"} className="hover:underline">
					Ofrecé tus servicios
				</Link>
				&nbsp;
				<span>·</span>
				&nbsp;
				<Link href={"/"} className="hover:underline">
					Sobre nosotros
				</Link>
			</div>
		</footer>
	);
}
