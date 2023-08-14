import Layout from "<src>/components/common/Layout";
import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer";

export default function WorkerPage() {
	return (
		<Layout>
			<div className="pb-20 relative ">
				<Header searcher={false} />
				<h1>Holas</h1>
				<Footer />
			</div>
		</Layout>
	);
}
