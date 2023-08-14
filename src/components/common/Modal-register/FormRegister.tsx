import { Formik, Form, FormikErrors, FormikValues } from "formik";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function FormRegister() {
	const [typePassword, setTypePassword] = useState(true);
	const [typeConfirmPassword, setTypeConfirmPassword] = useState(true);

	const register = (values: any) => {
		console.log(values);
	};

	const handleButtonPasswordClick = (
		e: React.SyntheticEvent<HTMLButtonElement>,
	) => {
		e.preventDefault();
		const target: any = e.target;
		const type = target.getAttribute("data-password");

		if (type === "password") {
			if (typePassword) {
				setTypePassword(false);
			} else {
				setTypePassword(true);
			}
		} else {
			if (typeConfirmPassword) {
				setTypeConfirmPassword(false);
			} else {
				setTypeConfirmPassword(true);
			}
		}
	};

	return (
		<Formik
			initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
			validate={(values: FormikValues) => {
				const errors: FormikErrors<FormikValues> = {};

				if (!values.name) {
					errors.name = "Requerido";
				}

				if (!values.email) {
					errors.email = "Requerido";
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = "Email Inválido";
				}

				if (!values.password) {
					errors.password = "Requerido";
				} else if (values.password.length < 9) {
					errors.password = "La contraseña debe tener como mínimo 9 caracteres";
				}

				if (!values.confirmPassword) {
					errors.confirmPassword = "Requerido";
				} else if (values.confirmPassword.length < 9) {
					errors.confirmPassword =
						"La contraseña debe tener como mínimo 9 caracteres";
				} else if (values.password != values.confirmPassword) {
					errors.confirmPassword = "Las contraseñas no coinciden";
				}

				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				register(values);
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
					{/* NAME */}
					<label className="">
						<input
							className="border border-gray-300 rounded w-full py-1 px-2 outline-none focus:border-blue-500"
							placeholder="Nombre"
							type="text"
							name="name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
						<div className="text-sm text-red-500">
							{errors.name && touched.name && errors.name}
						</div>
					</label>
					{/* EMAIL */}
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
					{/* PASSWORD */}
					<label className="relative flex flex-col  justify-center items-start">
						<button
							data-password="password"
							onClick={handleButtonPasswordClick}
							className="absolute right-2 top-2 text-sm text-gray-500"
						>
							{typePassword ? (
								<FontAwesomeIcon className="pointer-events-none" icon={faEye} />
							) : (
								<FontAwesomeIcon
									className="pointer-events-none"
									icon={faEyeSlash}
								/>
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
					{/* CONFIRM PASSWORD */}
					<label className="relative flex flex-col  justify-center items-start">
						<button
							data-password="confirmPassword"
							onClick={handleButtonPasswordClick}
							className="absolute right-2 top-2 text-sm text-gray-500"
						>
							{typeConfirmPassword ? (
								<FontAwesomeIcon className="pointer-events-none" icon={faEye} />
							) : (
								<FontAwesomeIcon
									className="pointer-events-none"
									icon={faEyeSlash}
								/>
							)}
						</button>
						<input
							className="border border-gray-300 rounded w-full py-1 px-2 outline-none focus:border-blue-500"
							placeholder="Confirmar Contraseña"
							type={typeConfirmPassword ? "password" : "text"}
							name="confirmPassword"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.confirmPassword}
						/>
						<div className="text-sm text-red-500">
							{errors.confirmPassword &&
								touched.confirmPassword &&
								errors.confirmPassword}
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
						Registrarse
					</button>
				</Form>
			)}
		</Formik>
	);
}
