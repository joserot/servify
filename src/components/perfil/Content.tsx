import Image from "next/image";

export default function Content() {
	return (
		<article
			className="
          min-h-screen
          flex
          justify-center
          items-start
          "
		>
			<div
				className="
        bg-white
          rounded
          w-full
          max-w-sm
          px-5
          py-10
          mt-10
          md:mt-20
          flex
          flex-col
          justify-center
          items-center
          "
			>
				<div
					className="
            flex
            flex-col
            justify-center
            items-center
            gap-2
            mb-5"
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
              rounded-full
              border
              border-gray-300"
					/>
					<button
						className="
               text-blue-500 
               mb-2 
               hover:underline"
					>
						Cambiar Foto
					</button>
				</div>
				<form
					className="
            flex
            flex-col
            justify-center
            items-center
            w-full
            max-w-sm
            gap-5"
				>
					<label className="flex flex-col w-full">
						Nombre
						<input
							defaultValue="Jose"
							name="name"
							type="text"
							className="border border-gray-300 rounded outline-none py-1 px-2"
						/>
					</label>
					<label className="flex flex-col w-full">
						Apellido
						<input
							defaultValue="Rotchen"
							name="lastName"
							type="text"
							className="border border-gray-300 rounded outline-none py-1 px-2"
						/>
					</label>
					<button
						type="submit"
						className="
                bg-blue-500 
                hover:bg-blue-600
                transition-colors
                text-white 
                rounded 
                py-1 
                px-2
                w-full"
					>
						Cambiar Datos
					</button>
				</form>
			</div>
		</article>
	);
}
