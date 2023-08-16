import Layout from "<src>/components/common/Layout";
import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer";
import Content from "<src>/components/perfil-profesional/Content";

export default function PerfilPage() {
	return (
		<Layout>
			<div className="relative bg-gray-200 pb-20">
				<Header searcher={false} />
				<Content />
				<Footer />
			</div>
		</Layout>
	);
}
