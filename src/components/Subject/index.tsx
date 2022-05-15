import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import smoothScroll from 'smoothscroll-polyfill'
import { deactivateKbar } from '~/store/kbar/actions'
import { useDispatch, useSelector } from '~/hooks'
import { selectKbar } from '~/store/kbar/selectors'
import Reader from '~/components/Reader'

/**
 * Global subject that listen to/broadcast events for the app
 */
const Subject = () => {
	const dispatch = useDispatch()
	const { visible } = useSelector(selectKbar)
	const { resolvedTheme } = useTheme()
	const { pathname } = useRouter()

	// Observers
	useEffect(() => {
		// Cursor glowing effect
		if (resolvedTheme === 'dark') {
			const glowingArea = document.querySelector('.glowing-area')
			const glowingDivs = document.querySelectorAll('.glowing-div')

			if (glowingArea) {
				const handler = (ev: any) => {
					glowingDivs.forEach((featureEl: any) => {
						const rect = featureEl.getBoundingClientRect()
						featureEl.style.setProperty('--x', ev.clientX - rect.left)
						featureEl.style.setProperty('--y', ev.clientY - rect.top)
					})
				}
				glowingArea.addEventListener('pointermove', handler)

				return () => {
					glowingArea.removeEventListener('pointermove', handler)
				}
			}
		}
		// Hide kbar on route change
		visible && dispatch(deactivateKbar())
	}, [pathname, resolvedTheme])

	useEffect(() => {
		// Apply smooth scroll polyfill
		smoothScroll.polyfill()
	}, [])

	return <Reader />
}

export default Subject
