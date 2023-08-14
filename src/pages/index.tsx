import Layout from "<src>/components/common/Layout";
import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer";
import Hero from "<src>/components/home/Hero";
import PopularServices from "<src>/components/home/PopularServices";
import About from "<src>/components/home/About";
import Featured from "<src>/components/home/Featured";

export default function Home() {
	return (
		<Layout>
			<div className="pb-20 relative ">
				<Header searcher={false} />
				<Hero />
				<PopularServices />
				<About />
				<Featured />
				<Footer />
			</div>
		</Layout>
	);
}
