import Image from "next/image";

export default function LoginButtons() {
	return (
		<div
			className="
          w-full 
          flex 
            justify-center 
            items-center 
            gap-2 
            flex-col 
            md:flex-row"
		>
			<button
				className="
            flex 
            justify-center 
            items-center 
            gap-3 
            bg-gray-100
            hover:bg-gray-50
            transition-colors
            rounded
            py-2
            px-3
            w-full
            md:w-1/2
             text-sm
          "
			>
				<Image
					width={50}
					height={50}
					src="/images/google.png"
					alt="Google Login"
					className="w-5 h-5"
				/>
				Inicia con Google
			</button>
			<button
				className="
            flex 
            justify-center 
            items-center 
            gap-3 
            bg-gray-100
            hover:bg-gray-50
            transition-colors
            rounded
            py-2
            px-3
            w-full
            md:w-1/2
            text-sm
          "
			>
				<Image
					width={50}
					height={50}
					src="/images/facebook.png"
					alt="Facebook Login"
					className="w-5 h-5"
				/>
				Inicia con Facebook
			</button>
		</div>
	);
}
