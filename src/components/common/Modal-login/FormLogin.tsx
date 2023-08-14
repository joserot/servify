import { Formik, Form, FormikErrors, FormikValues } from "formik";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function FormLogin() {
	const [typePassword, setTypePassword] = useState(true);

	const login = (values: any) => {
		console.log(values);
	};

	const handleButtonPasswordClick = (
		e: React.SyntheticEvent<HTMLButtonElement>,
	) => {
		e.preventDefault();

		if (typePassword) {
			setTypePassword(false);
		} else {
			setTypePassword(true);
		}
	};

	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			validate={(values: FormikValues) => {
				const errors: FormikErrors<FormikValues> = {};

				if (!values.password) {
					errors.password = "Requerido";
				} else if (values.password.length < 9) {
					errors.password = "La contraseña debe tener como mínimo 9 caracteres";
				}

				if (!values.email) {
					errors.email = "Requerido";
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = "Email Inválido";
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				login(values);
				setSubmitting(false);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				isSubmitting,
			}) => (
				<Form className="flex flex-col gap-5 w-full">
					<label className="">
						<input
							className="border border-gray-300 rounded w-full py-1 px-2 outline-none focus:border-blue-500"
							placeholder="Email"
							type="email"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						<div className="text-sm text-red-500">
							{errors.email && touched.email && errors.email}
						</div>
					</label>
					<label className="relative flex flex-col  justify-center items-start">
						<button
							onClick={handleButtonPasswordClick}
							className="absolute right-2 top-2 text-sm text-gray-500"
						>
							{typePassword ? (
								<FontAwesomeIcon icon={faEye} />
							) : (
								<FontAwesomeIcon icon={faEyeSlash} />
							)}
						</button>
						<input
							className="border border-gray-300 rounded w-full py-1 px-2 outline-none focus:border-blue-500"
							placeholder="Contraseña"
							type={typePassword ? "password" : "text"}
							name="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						<div className="text-sm text-red-500">
							{errors.password && touched.password && errors.password}
						</div>
					</label>
					<button
						type="submit"
						className="
                bg-blue-500 
                py-1 
                px-3 
                rounded 
                text-white 
                w-full  
                hover:bg-blue-600
               transition-colors"
					>
						Iniciar Sesión
					</button>
				</Form>
			)}
		</Formik>
	);
}
