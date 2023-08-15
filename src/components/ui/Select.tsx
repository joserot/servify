import Select from "react-select";

interface Option {
	value: string;
	label: string;
}

interface Props {
	options: Option[];
	placeholder?: string;
	disabled?: boolean;
	defaultValue?: Option;
}

export default function CustomSelect({
	options,
	placeholder = "Seleccioná",
	disabled = false,
	defaultValue,
}: Props) {
	return (
		<Select
			value={defaultValue}
			options={options}
			placeholder={placeholder}
			isDisabled={disabled}
			noOptionsMessage={() => "No hay opciones"}
		/>
	);
}
