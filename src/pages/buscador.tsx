import Layout from "<src>/components/common/Layout";
import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer";
import Content from "<src>/components/buscador/Content";

export default function BuscadorPage() {
	return (
		<Layout>
			<div
				className="
            pb-20 
            relative 
            bg-gray-200 
            w-full 
            h-full
"
			>
				<Header />
				<Content />
				<Footer />
			</div>
		</Layout>
	);
}
