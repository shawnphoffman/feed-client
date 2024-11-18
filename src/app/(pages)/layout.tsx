import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.css'

import { Suspense } from 'react'
import type { Metadata } from 'next'
import {
	Bangers,
	// Comic_Neue
} from 'next/font/google'

const bangers = Bangers({ display: 'swap', weight: '400', subsets: ['latin'] })
// export const comic = Comic_Neue({ display: 'swap', weight: '700', subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Star Wars BlueSky Feed',
}

type Props = Readonly<{
	children: React.ReactNode
}>

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en" className={`${bangers.className} antialiased`}>
			<body>
				<div className="m-0 h-dvh w-dvw overflow-scroll bg-transparent max-h-svh max-w-full">
					<div className="flex flex-1 flex-col gap-4 p-4 mx-auto overflow-y-scroll h-fit">
						<Suspense fallback={'loading...'}>{children}</Suspense>
					</div>
				</div>
			</body>
		</html>
	)
}
