import "<src>/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "<src>/context/themeContext";
import { FiltersProvider } from "<src>/context/filtersContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<FiltersProvider>
			<ThemeProvider>
				<>
					<Head>
						<title>Servify</title>
					</Head>
					<Component {...pageProps} />
				</>
			</ThemeProvider>
		</FiltersProvider>
	);
}
