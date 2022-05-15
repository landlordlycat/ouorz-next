import { useTheme } from 'next-themes'
import Icon from '~/components/Icon'
import Subject from '~/components/Subject'

const themes = ['system', 'dark', 'light']
const icons = [
	<Icon key="system" name="gear" />,
	<Icon key="dark" name="moon" />,
	<Icon key="light" name="sun" />,
]
const targetThemes = ['dark', 'light', 'system']

export default function Footer() {
	const { setTheme, theme } = useTheme()

	return (
		<>
			<footer className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 border-t border-b text-center py-4 mt-20 bg-white">
				<div className="fixed bottom-8 left-8 text-gray-500 dark:text-gray-300">
					<button
						aria-label="change theme"
						onClick={() => {
							setTheme(targetThemes[themes.indexOf(theme)])
						}}
						className="w-full p-3 shadow-sm border border-gray-300 dark:border-gray-800 hover:shadow-inner dark:hover:bg-gray-700 rounded-md cursor-pointer focus:outline-none justify-center items-center text-xl tracking-wider bg-white dark:bg-gray-800 flex"
					>
						<span className="w-7 h-7">{icons[themes.indexOf(theme)]}</span>
					</button>
				</div>
				<div className="fixed bottom-8 right-8 text-gray-500 dark:text-gray-300">
					<button
						aria-label="change theme"
						onClick={() => {
							window.scrollTo({ top: 0, behavior: 'smooth' })
						}}
						className="w-full p-3 shadow-sm border border-gray-300 dark:border-gray-800 hover:shadow-inner dark:hover:bg-gray-700 rounded-md cursor-pointer focus:outline-none justify-center items-center text-xl tracking-wider bg-white dark:bg-gray-800 flex"
					>
						<span className="w-7 h-7">
							<Icon name="arrowUp" />
						</span>
					</button>
				</div>
				<p className="text-gray-500 text-4 tracking-wide dark:text-gray-400">
					<a
						href="https://twitter.com/ttttonyhe"
						target="_blank"
						rel="noreferrer"
					>
						@ttttonyhe
					</a>{' '}
					<span>·</span>{' '}
					<a
						href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
						target="_blank"
						rel="noreferrer"
					>
						CC BY-NC-SA 4.0
					</a>{' '}
					<span>·</span>{' '}
					<a
						href="https://github.com/HelipengTony/ouorz-next"
						target="_blank"
						rel="noreferrer"
					>
						OSS
					</a>
				</p>
			</footer>
			<Subject />
		</>
	)
}
