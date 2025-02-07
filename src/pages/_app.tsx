import '~/assets/styles/vendors/tailwind.css'
import '~/styles/global.css'
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { Provider as ReduxProvider } from 'react-redux'
import store from '~/store'

function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			{/* Splitbee Analytics Script */}
			<Script async src="https://cdn.splitbee.io/sb.js" />
			{/* NProgress Loading Progress Bar */}
			<NextNprogress
				color="#d4d4d8"
				height={2}
				options={{ showSpinner: false }}
			/>
			{/* Next-Themes Theme Provider */}
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem={true}
			>
				<ReduxProvider store={store}>
					<div className="bg-gbg dark:bg-neutral-900 dark:text-white min-h-screen">
						<Component {...pageProps} />
					</div>
				</ReduxProvider>
			</ThemeProvider>
		</div>
	)
}

export default App
