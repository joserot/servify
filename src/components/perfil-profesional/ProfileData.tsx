import Image from "next/image";
import CustomSelect from "../ui/Select";
import servicesList from "<src>/data/servicesList";

export default function ProfileData() {
	return (
		<div
			className="
        bg-white
          rounded
          w-1/3
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
				<label className="flex flex-col w-full">
					Profesión
					<CustomSelect
						options={servicesList.map((service) => {
							return { label: service, value: service };
						})}
					/>
				</label>
				<label className="flex flex-col w-full">
					Ubicación
					<CustomSelect
						options={[
							{
								label: "Buenos Aires, Argentina",
								value: "Buenos Aires, Argentina",
							},
						]}
						disabled={true}
						defaultValue={{
							label: "Buenos Aires, Argentina",
							value: "Buenos Aires, Argentina",
						}}
					/>
				</label>
				<label className="flex flex-col w-full">
					WhatsApp
					<input
						defaultValue="3756435952"
						name="whatsapp"
						type="number"
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
					Actualizar Datos
				</button>
			</form>
		</div>
	);
}
