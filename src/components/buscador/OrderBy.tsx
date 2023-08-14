export default function OrderBy() {
	return (
		<div className="w-full mb-5">
			<label className="flex  justify-end items-center gap-1 flex-wrap">
				Ordenar Por:
				<select
					className="
          bg-white 
          py-1 
          px-3 
          outline-none 
          text-inherit 
          rounded 
          shadow-sm"
				>
					<option value="1">Más Destacados</option>
					<option value="1">Más Recomendados</option>
					<option value="2">Más Experiencia</option>
				</select>
			</label>
		</div>
	);
}
