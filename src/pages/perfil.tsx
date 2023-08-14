import Layout from "<src>/components/common/Layout";
import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer";
import Content from "<src>/components/perfil/Content";

export default function PerfilPage() {
	return (
		<Layout>
			<div className="relative bg-gray-200">
				<Header searcher={false} />
				<Content />
				<Footer />
			</div>
		</Layout>
	);
}
