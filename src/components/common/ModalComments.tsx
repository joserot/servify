export default function ModalComments() {
	const comments = [
		"Jorge Menedez",
		"Jose Rotchen",
		"Hans Wiede",
		"Pedro Espindola",
		"Anónimo",
		"Cesar Fuentes",
		"Pablo Escobar",
	];

	return (
		<div className="w-full flex flex-col justify-start items-start">
			<section className="bg-white">
				<div className="max-w-2xl mx-auto px-4">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
							Recomendaciones (13)
						</h2>
					</div>

					{comments.map((comment) => {
						return (
							<article
								key={comment}
								className="pt-6 mb-6 text-base bg-white border-t border-gray-200  "
							>
								<footer className="flex justify-between items-center mb-2">
									<div className="flex items-center flex-wrap">
										<p className="inline-flex items-center mr-3 text-sm text-gray-900 ">
											<img
												className="mr-2 w-6 h-6 rounded-full"
												src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
												alt="Bonnie Green"
											/>
											{comment}
										</p>
										<p className="text-sm text-gray-600 ">
											<time dateTime="2022-03-12" title="March 12th, 2022">
												Mar. 12, 2022
											</time>
										</p>
									</div>
								</footer>
								<p className="text-gray-500 ">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Architecto eum veniam exercitationem numquam voluptatum
									magnam, dolores temporibus voluptates quam
								</p>
								<div className="flex items-center mt-4 space-x-4"></div>
							</article>
						);
					})}
				</div>
			</section>
		</div>
	);
}
